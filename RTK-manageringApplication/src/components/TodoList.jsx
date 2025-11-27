import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice from '../slices/todoSlice'

const TodoList = () => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    const { removeTodo} = todoSlice.actions
  return (
    

        <ul className=' bg-[#FFC50F]   flex flex-col gap-3 mt-5 p-2'>


            <h3 className='p-2 '>
            todos : {todos.length}
          </h3>



           {todos.map((todo)=>(<li className='flex w-[95%] m-auto rounded-md flex-row justify-between text-white bg-white p-3 ' key={todo.id}>
          
                  <span className='text-black'> {todo.task}   </span>
                        <button  onClick={()=>{dispatch(removeTodo(todo.id))}} 
                          className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-base text-[20px] px-4 py-2.5 text-center leading-5'
                          >remove</button>
          
           </li>))} 


                          </ul>
  )
}

export default TodoList
