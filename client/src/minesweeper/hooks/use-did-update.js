import { useEffect, useRef } from 'react';

export const useDidUpdate = (fn, ...deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) fn();
    else didMount.current = true;
    // eslint-disable-next-line
  }, deps);
};
