import React, { useState } from 'react'


const CreateForm = () => {
const[content,setContent]=useState('');




  return (
    <form className='create-form'>
        <input 
        type="text" 
        placeholder='輸入待辦事項' 
        onChange={(e)=>{setContent(e.target.value)}}
        />
        
        
        
        <button type="button">加入</button>
        {/* {content} */}
    </form>
  )
}


export default CreateForm


