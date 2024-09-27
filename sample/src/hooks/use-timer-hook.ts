// src/hooks/useTimer.tsx
import { useEffect} from 'react';

export const useTimeout = <T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number,
  ...args: T
) => {
  useEffect(() => {
    const timer = setTimeout(cb, delay, ...args);

    return () => clearTimeout(timer);
  }, [args, cb, delay]);
};