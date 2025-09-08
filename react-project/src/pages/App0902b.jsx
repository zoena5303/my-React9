import React, { useContext, useState } from 'react'

// 建立一個空的共用區(可以跨元件使用)
const Context=React.createContext();

const App0902b = () => {
    // 建立一個Nav元件
    const Nav = () => {
        return(
            <div className='nav'>
                {/* 按鈕 */}
                <Btn/>
            </div>
        )
        }

        // 建立按鈕
        const Btn=()=>{
            // 建立登入登出的變數
const [signedIn, setSignedIn]=useContext(Context)
            return(
                <button onClick={()=>setSignedIn(!signedIn)}>
                    {/* 登出 */}
                    {signedIn?"登入":"登出"}
                </button>
            )
        }

        const [signedIn, setSignedIn]=useState(false)

    return (
        <div>
            <h1>useContext-跨元件使用變數與函式</h1>
            <hr />
            <Context.Provider value={[signedIn, setSignedIn]}>

            <Nav />
            {/* <h2>Singed Out</h2> */}
            <h2>
                {signedIn?"Signed In":"Signed Out"}
            </h2>

            </Context.Provider>
        </div>
    )
}

export default App0902b
