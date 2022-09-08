import React from 'react';

function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: any;
  // eslint-disable-next-line func-names
  return function () {
    // @ts-ignore
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

export function useOnClickOutside(ref: any, handler: () => void) {
  React.useEffect(
    () => {
      const listener = debounce((event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler();
      }, 100);

      if (typeof document !== 'undefined') {
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      }

      return () => {};
    },

    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  );
}
