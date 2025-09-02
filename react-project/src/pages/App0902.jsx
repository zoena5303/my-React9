import React from 'react'

const App=()=> {
    //表格元件
    const ProdTable=()=>{
return(
    <table style={{width:'500px',marginTop:'20px'}}>

    </table>
)


    }
  return (
    <div className='wrap'>
排序:
<input type="checkbox" />
<br/>
搜尋列
<input type="文字方塊" />
{/*表格標籤*/}
<table>
    <tbody>
        <tr>
            <td>產品名稱</td>
            <td>產品圖</td>
            <td>價格</td>
        </tr>
    </tbody>
</table>
    </div>
  )
}

export default App