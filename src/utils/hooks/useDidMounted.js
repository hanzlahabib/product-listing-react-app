import { useRef, useEffect } from 'react';

export const useDidMounted = () => {
  const didMountedRef = useRef(true);
  useEffect(() => {
    didMountedRef.current = false;
  }, []);
  return didMountedRef.current;
};
