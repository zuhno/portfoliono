import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);

  function handleChange(e: MediaQueryListEvent) {
    setIsMobile(e.matches);
  }

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 335px) and (max-width: 757px)");

    setIsMobile(mql.matches);
    mql.addEventListener("change", handleChange);
  }, []);

  return { isMobile };
};

export default useMediaQuery;
