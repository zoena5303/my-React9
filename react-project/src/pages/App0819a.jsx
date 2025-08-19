// 寫法一：傳統 props
function MyComponent(props) {
  return (
    <>
      <div>Hello!</div>
      <div>{props.a}</div>
      <div>{props.b}</div>
    </>
  );
}

// 寫法二：解構 props
function MyComponent2({ a, b }) {
  return (
    <>
      <div>Hi (解構版)!</div>
      <div>{a}</div>
      <div>{b}</div>
    </>
  );
}

// 父元件
const App0819a = () => {
  return (
    <div>
      <MyComponent a="我是屬性a" b="我是屬性b" />
      <MyComponent2 a="我是屬性a" b="我是屬性b" />
    </div>
  );
};

export default App0819a;

