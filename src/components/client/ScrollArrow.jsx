import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./styles/scrollArrow.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div onClick={scrollTop}>
      <ArrowUpOutlined
        className="scrollTop"
        style={{
          height: 40,
          width: "50px",
          color: "white",
          fontSize: "40px",
          display: showScroll ? "flex" : "none",
        }}
      />
    </div>
  );
};

export default ScrollArrow;
