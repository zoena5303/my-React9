import {useMemo, useState} from 'react'

const App = () => {
    // 表格資料
    const arrProd = [
        {
            id: 1,
            prodName: '筆電',
            prodPrice: 80,
            prodImgUrl: './images/p1.jpg'
        },
        {
            id: 2,
            prodName: '人物1',
            prodPrice: 120,
            prodImgUrl: './images/p2.jpg'
        },
        {
            id: 3,
            prodName: '街景',
            prodPrice: 200,
            prodImgUrl: './images/p3.jpg'
        },
        {
            id: 4,
            prodName: '自拍視角',
            prodPrice: 160,
            prodImgUrl: './images/p4.jpg'
        },
        {
            id: 5,
            prodName: '人物2',
            prodPrice: 120,
            prodImgUrl: './images/p5.jpg'
        }
    ]

    // 表格元件
    const ProTable = ({ascFilterProds}) => {
        return (
            <table style={{ width: "500px", marginTop: "20px" }}>
                <tbody>
                    {/* jsx中撰寫js語法，必須先打上一組大括號 */}
                    {
                        ascFilterProds.map((prod) => {
                            return(
                                <tr key={prod.id}>
                        <td
                            style={{
                                borderBottom: "1px dashed #ccc",
                                padding: "5px",
                                width: "100px",
                            }}>
                            {prod.prodName}
                        </td>
                        <td
                            style={{
                                borderBottom: "1px dashed #ccc",
                                padding: "5px",
                                width: "100px",
                            }}>
                            <img src={prod.prodImgUrl} alt=""
                            style={{width:"250px"}} />
                        </td>
                        <td
                            style={{
                                borderBottom: "1px dashed #ccc",
                                padding: "5px",
                                width: "100px",
                            }}>
                            {prod.prodPrice}
                        </td>
                        
                    </tr>
                            )
                            
                        })

                    }
                </tbody>
            </table>
        )
    }

    // 陣列變數，預設為原商品陣列資料
    const [prods, setProds] = useState(arrProd);

    // 排序變數，預設為遞增
    const [ascending, setAscending] = useState(true);

    // 搜尋變數，預設為空字串


    // 建立排序與搜尋的函式
    const ascFilterProds=useMemo(()=>{
        return [...prods]
        .sort((a,b)=>{
            return ascending ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice
        })
    })

    return (
        <div className='wrap'>
            排序：
            <input
            type="checkbox"
            // 綁定排序變數
            checked={ascending}
            // 當核取方塊(checkbox)有異動時，更新排序變數
            onChange={(e)=>{setAscending(e.target.checked)}}
            />

            <br />
            搜尋：
            <input type="text" />

            {/* 表格 */}
            <ProTable ascFilterProds={ascFilterProds}/>

        </div>
    )
}

export default App
