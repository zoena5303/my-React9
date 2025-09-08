import React, { useState } from 'react'

const App0903 = () => {
    //useState變數
    //conts[input]
  const [inputValue, setInputValue] = useState('');
  console.log('App渲染了...');

  const btnHandler = () => {
    console.log("Button clicked, inputValue =", inputValue);
  }

  return (
    <div className='wrap'>
      <h1>useRef</h1> <hr/>
      
      <input 
        type="text" 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)} 
      />
      <button onClick={btnHandler}>click</button>
    </div>
  )
}

export default App0903;
