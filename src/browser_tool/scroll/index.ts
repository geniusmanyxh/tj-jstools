const scrollProgressBar = (): number => {
  let bfb = 0;
  let WIN: any;
  let _DOC: any;
  if (typeof window !== "undefined") {
    WIN = window as Window;
  }
  if (typeof document !== "undefined") {
    _DOC = document as Document;
  }
  const clientH =
    WIN.innerHeight ||
    _DOC.documentElement.clientHeight ||
    _DOC.body.clientHeight;
  const offH = _DOC.documentElement.offsetHeight || _DOC.body.offsetHeight;
  const sTop = _DOC.documentElement.scrollTop || _DOC.body.scrollTop;

  if (clientH < offH) {
    const sliderH = (clientH / offH) * clientH;

    if (sTop === 0) {
      bfb = 0;
    } else {
      const currentH = Math.ceil(sTop + (sliderH / clientH) * offH);
      bfb = parseInt(((currentH / offH) * 100).toFixed(0));
    }
  } else {
    bfb = 0;
  }
  return bfb;
};

const scrollBackTop = (step = 0.1, time = 20): void => {
  let WIN: any;
  let _DOC: any;
  if (typeof window !== "undefined") {
    WIN = window as Window;
  }
  if (typeof document !== "undefined") {
    _DOC = document as Document;
  }
  const x: number = WIN.scrollX || 0;
  const y: number = WIN.scrollY || 0;
  let elTop = _DOC.documentElement.scrollTop || _DOC.body.scrollTop;

  if (typeof step === "number") {
    if (step <= 0) {
      step = 0.1;
    } else if (step > 1) {
      step = 1;
    }
  } else {
    step = 0.1;
  }

  if (typeof time !== "number") {
    time = 20;
  }
  console.log(y);
  // 设置定时器制作动画效果
  if (y > 0) {
    const countNum = Math.ceil(y * step);

    const timer = setInterval(function () {
      // 高度自减回收过程
      elTop -= countNum;
      // 当高度为0清除定时器 - 停止动画
      if (elTop <= 0) {
        clearInterval(timer);
      }
      // 重新将高度t赋值给滚动的高度
      _DOC.documentElement.scrollTop = _DOC.body.scrollTop = elTop;
    }, time);
  }
};

export { scrollProgressBar, scrollBackTop };
