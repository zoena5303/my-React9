import React, { useRef } from "react";

const App = () => {
  // 建立變數
  const inputRef = useRef(null);

  // 關閉密碼函式
  function closePassword() {
    if (inputRef.current) {
      inputRef.current.type = "password";
    }
  }

  // 顯示密碼函式
  function showPassword() {
    if (inputRef.current) {
      inputRef.current.type = "text";
    }
  }

  return (
    <div>
      <h1>useRef - 開關密碼</h1>
      <hr />
      <input ref={inputRef} type="password" />
      <button onClick={closePassword}>關閉密碼</button>
      <button onClick={showPassword}>查看密碼</button>
    </div>
  );
};

export default App;
