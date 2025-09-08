import React, { useRef } from "react";

const App = () => {
  // 建立 yellow 區塊的 ref
  const yellowRef = useRef(null);

  // 點擊按鈕 → 滑到指定區塊
  const scrollToYellow = () => {
    if (yellowRef.current) {
      yellowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1>useRef - 滑到指定位置</h1>
      {/* 製造一個長頁面 */}
      <div style={{ height: "800px", backgroundColor: "lightgray" }}>
        這裡是上方內容
      </div>

      {/* 目標區塊 */}
      <div
        ref={yellowRef}
        style={{ backgroundColor: "yellow", height: "400px" }}
      >
        🎯 Yellow 區塊
      </div>

      <div style={{ height: "800px", backgroundColor: "lightblue" }}>
        這裡是下方內容
      </div>

      {/* 固定在畫面下方的按鈕 */}
      <button onClick={scrollToYellow} style={{ position: "fixed", bottom: 20, right: 20 }}>
        滑到 Yellow
      </button>
    </div>
  );
};

export default App;
