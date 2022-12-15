import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useIsHomepage = () => {
  const [isHomepage, setIsHomepage] = useState(true);

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname.match(/project-details/gi)) {
      setIsHomepage(false);
    } else {
      setIsHomepage(true);
    }
  }, [pathname]);

  return isHomepage;
};

export default useIsHomepage;
