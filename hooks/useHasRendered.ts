import { useEffect, useRef } from "react";

const useHasRendered = () => {
  const hasRendered = useRef<boolean>(false);

  useEffect(() => {
    hasRendered.current = true;

    return () => {
      hasRendered.current = false;
    };
  }, []);

  return hasRendered.current;
};

export default useHasRendered;
