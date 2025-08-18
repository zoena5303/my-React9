import React, { useState } from 'react';

// 建立元件方法1（正常渲染）
function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // 使用 count
    console.log(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        MyComponent 點擊次數: {count}
      </button>
    </div>
  );
}

// 建立元件方法2（箭頭函式版本）
const MyComponent2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count + 1);
        }}
      >
        MyComponent2 點擊次數: {count}
      </button>
    </div>
  );
};

const App0818 = () => {
  return (
    <div>
      <h2>App0818</h2>
      <MyComponent />
      <MyComponent2 />
    </div>
  );
};

export default App0818;
