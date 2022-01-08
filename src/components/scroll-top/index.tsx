import React, { useEffect, useState } from "react";
import "./styles.scss";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  const checkScrollTop = () => {
    if (window.scrollY > 2900) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollTop}
      className={`scrollTop ${showScroll ? "show" : ""}`}
    >
      <span className="iconify" data-icon="typcn:arrow-up" data-width="50"></span>
    </div>
  );
};

export default ScrollTop;
