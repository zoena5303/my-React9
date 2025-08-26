import React, { useEffect } from "react";
import $ from "jquery";
import p3 from "../images/p3.png";
import "../css/App0826a.css";
const App = () => {
  useEffect(() => {
    // jQuery 綁定縮放效果
    $(".zoom img").on("mouseenter", function () {
      $(this).css("transform", "scale(1.2)");
    });

    $(".zoom img").on("mouseleave", function () {
      $(this).css("transform", "scale(1)");
    });
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <h2>jquery-圖片縮放</h2>

      <a
        href="#"
        className="zoom"
        style={{
          border: "1px solid black",
          width: "200px",
          display: "inline-block",
          overflow: "hidden", // 避免放大超出邊框
        }}
      >
       <img 
  src={p3} 
  alt="demo"
  style={{
    width: "100%",
    verticalAlign: "top",
    transition: "0.3s ease"
  }}
/>
      </a>
    </div>
  );
};

export default App;




