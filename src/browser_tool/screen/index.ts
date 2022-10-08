type RFS =
  | 'requestFullscreen'
  | 'webkitRequestFullScreen'
  | 'mozRequestFullScreen'
  | 'msRequestFullscreen'
type EFS =
  | 'exitFullscreen'
  | 'webkitExitFullscreen'
  | 'webkitCancelFullScreen'
  | 'mozCancelFullScreen'
  | 'msExitFullscreen'
type FSEL =
  | 'fullscreenElement'
  | 'webkitFullscreenElement'
  | 'webkitCurrentFullScreenElement'
  | 'mozFullScreenElement'
  | 'msFullscreenElement'
type FSENAB =
  | 'fullscreenEnabled'
  | 'webkitFullscreenEnabled'
  | 'webkitCancelFullScreen'
  | 'mozFullScreenEnabled'
  | 'msFullscreenEnabled'
type FSC =
  | 'fullscreenchange'
  | 'webkitfullscreenchange'
  | 'mozfullscreenchange'
  | 'MSFullscreenChange'
type FCE =
  | 'fullscreenerror'
  | 'webkitfullscreenerror'
  | 'mozfullscreenerror'
  | 'MSFullscreenError'
type FunctionMap = [RFS, EFS, FSEL, FSENAB, FSC, FCE]

const FunMap: FunctionMap[] = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
  ],
  // New WebKit
  [
    'webkitRequestFullscreen' as RFS,
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  // Old WebKit
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror',
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError',
  ],
]
type FunType = {
  requestFullscreen: RFS
  exitFullscreen: EFS
  fullscreenElement: FSEL
  fullscreenEnabled: FSENAB
  fullscreenchange: FSC
  fullscreenerror: FCE
}

const defaultFunMap: FunctionMap = FunMap[0]
let FunAPI: FunType = {
  requestFullscreen: 'requestFullscreen',
  exitFullscreen: 'exitFullscreen',
  fullscreenElement: 'fullscreenElement',
  fullscreenEnabled: 'fullscreenEnabled',
  fullscreenchange: 'fullscreenchange',
  fullscreenerror: 'fullscreenerror',
}

for (const fmap of FunMap) {
  if (fmap[1] in document) {
    for (const [idx, fun] of FunMap.entries()) {
      FunAPI[defaultFunMap[idx]] = fun
    }
  }
}

type FullEvent = {
  change: FSC
  error: FCE
}

const eventNameMap: FullEvent = {
  change: FunAPI.fullscreenchange,
  error: FunAPI.fullscreenerror,
}

const isFull = (): boolean => Boolean(document[FunAPI.fullscreenElement])

const getFullEl = (): Element | undefined =>
  document[FunAPI.fullscreenElement] ?? undefined

const isFullEnabled = (): boolean => Boolean(document[FunAPI.fullscreenEnabled])

const openFull = (
  el: Element = document.documentElement,
  options: FullscreenOptions = {
    navigationUI: 'auto',
  }
): Promise<void> => {
  return el[FunAPI.exitFullscreen](options)
}

const closeFull = (): Promise<void> => {
  return document[FunAPI.exitFullscreen]()
}

const toggleFull = (
  el: Element = document.documentElement,
  options: FullscreenOptions = {
    navigationUI: 'auto',
  }
) => (isFull() ? openFull(el, options) : closeFull())

export { isFull, getFullEl, isFullEnabled, openFull, closeFull, toggleFull }
