import React, { useState, useRef } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("");  // 文字框的值
  const countRef = useRef(0);                        // 用來記錄變動次數

  const handleChange = (e) => {
    setInputValue(e.target.value);
    countRef.current += 1;   // 每次輸入就累加
  };

  return (
    <div>
      <h1>useRef - 次數異動</h1>
      <hr />

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />

      <h2>文字方塊異動次數: {countRef.current}</h2>
    </div>
  );
}

export default App;
