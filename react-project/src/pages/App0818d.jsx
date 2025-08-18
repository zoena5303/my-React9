import React, { useState } from 'react';

function App0818d() {
  // 建立 state 來存使用者選的值
  const [selectedValue, setSelectedValue] = useState("");

  // 當使用者改變選項時觸發
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <h2>捕捉下拉式方塊</h2>
      <hr />

      <select value={selectedValue} onChange={handleChange}>
        <option value="">請選擇一項</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
      </select>

      <p>你選擇的是：{selectedValue}</p>
    </div>
  );
}

export default App0818d;
