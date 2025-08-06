import'./css./app0805-1.css'


function App(){
    //一般變數
    const myName="阿娟"
    //屬性名稱變數
    const myclassName="myClassName"
    //方法
    function myClick(){
        alert('我是按鈕1')
    }
    return(
       <>
    <div>
        <p className={myClassName}>姓名:{myName}</p>
        <button type="button" onClick={myClick}>按鈕1</button>
         <button type="button" onClick={myClick}>按鈕2</button>
    </div>
       </>
    )
}
export default App;