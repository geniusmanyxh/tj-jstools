declare const isFull: () => boolean;
declare const getFullEl: () => Element | undefined;
declare const isFullEnabled: () => boolean;
declare const openFull: (el?: Element, options?: FullscreenOptions) => Promise<void>;
declare const closeFull: () => Promise<void>;
declare const toggleFull: (el?: Element, options?: FullscreenOptions) => Promise<void>;
export { isFull, getFullEl, isFullEnabled, openFull, closeFull, toggleFull };
