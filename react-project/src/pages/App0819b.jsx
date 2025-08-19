// 子元件：用 children 包住要顯示的內容
function MyComponent({ children }) {
  return (
    <>
      {children}
    </>
  );
}

// 另一個子元件
function SecondComponent() {
  return <h1>我是 SecondComponent 元件</h1>;
}

// 主要元件
const App0819b = () => {
  return (
    <div>
      <h1>元件之間傳遞元件</h1>
      <hr />
      <MyComponent>
        <SecondComponent />
      </MyComponent>
    </div>
  );
};

export default App0819b;
