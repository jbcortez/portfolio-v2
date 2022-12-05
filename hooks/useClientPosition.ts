import { useEffect, useState } from "react";
import { Pos } from "../types";

const useClientPosition = (): null | Pos => {
  const [clientPos, setClientPos] = useState<Pos | null>(null);

  const mouseEvent = (e: MouseEvent) => {
    setClientPos(() => ({ x: e.clientX, y: e.clientY }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseEvent);

    return () => {
      window.removeEventListener("mousemove", mouseEvent);
    };
  }, []);

  return clientPos;
};

export default useClientPosition;
