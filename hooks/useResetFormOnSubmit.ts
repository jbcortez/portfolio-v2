import { useEffect } from "react";

const useResetFormOnSubmit = (
  isSubmitSuccessful: boolean,
  reset: () => void,
  setShowModal: (showModal: boolean) => void,
  setTimer: (timer: any) => void
) => {
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setShowModal(true);

      const timer = setTimeout(() => {
        setShowModal(false);
      }, 4000);
      setTimer(timer);
    }
  }, [reset, isSubmitSuccessful, setShowModal, setTimer]);
};

export default useResetFormOnSubmit;
