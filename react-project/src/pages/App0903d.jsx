import React, { useRef } from "react";

const App = () => {
  const inputCount = 5; // 👈 想要幾個輸入框，改這裡就好
  const inputRefs = Array.from({ length: inputCount }, () => useRef(null));

  const handleFocus = (index) => {
    inputRefs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.backgroundColor = i === index ? "yellow" : "";
      }
    });
  };

  return (
    <div>
      <h1>useRef - 動態變色</h1>
      <hr />
      {inputRefs.map((ref, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          文字方塊 {index + 1}{" "}
          <input
            type="text"
            ref={ref}
            onFocus={() => handleFocus(index)}
            style={{ padding: "4px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
