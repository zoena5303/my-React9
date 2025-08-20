import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'


const TodoWrapper = () => {
    //因為有n個TODO，所以要用陣列存取
    const[todos,setTodos]=useState(['停車費','對發票'])
    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            <CreateForm/>
            {
                todos.map((todo)=>{
                    return<Todo todo={todo}/>
              }
                )
                
            }
            <Todo/>
        </div>
    )
}


export default TodoWrapper

