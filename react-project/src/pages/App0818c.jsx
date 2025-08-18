import React, { useState } from "react";

const App0818c = () => {
  const [txt, setTxt] = useState("user");

  const handleChange = (e) => {
    setTxt(e.target.value);
  };

  const handleSubmit = () => {
    alert(`帳號：${txt}`);
  };

  return (
    <div>
      <h2>文字方塊</h2>
      <hr />
      帳號：
      <input type="text" value={txt} onChange={handleChange} />
      <button onClick={handleSubmit}>確定送出</button>
    </div>
  );
};

export default App0818c;
