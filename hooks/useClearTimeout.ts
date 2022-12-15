import { useEffect } from "react";

function useClearTimeout(timer: any, conditional?: boolean) {
  useEffect(() => {
    if (!conditional && timer) {
      clearTimeout(timer);
    }
  }, [conditional, timer]);
}

export default useClearTimeout;
