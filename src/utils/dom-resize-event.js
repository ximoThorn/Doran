import ResizeObserver from 'resize-observer-polyfill';

const isServer = typeof window === 'undefined';

// ResizeObserver的运用， 监听dom的resize事件
// 把resize后要执行的事件挂载到element上，然后触发后遍历执行fun

const resizeHandler = function(entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    }
  }
};

export const addResizeListener = function(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  };
  element.__resizeListeners__.push(fn);
};

export const removeResizeListener = function(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  };
};
