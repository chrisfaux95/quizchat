import { useEffect, useRef } from 'react';

export const useInterval = (fn, delay) => {
  const fnRef = useRef();

  useEffect(() => {
    fnRef.current = fn;
  }, [fn])

  useEffect(() => {
    if (delay) {
      const intervalId = setInterval(() => {
        fnRef.current();
      }, delay);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [delay]);
};
