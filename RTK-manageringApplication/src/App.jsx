
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import userSlice from './slices/userSlice'
import { useState } from 'react'
import todoSlice from './slices/todoSlice'
import TodoList from './components/TodoList'
import UserList from './components/UserList'
function App() {
  
  const [text,setText] = useState("")
  let dispatch = useDispatch()

  let {addUser }=userSlice.actions
  let {addTodo } = todoSlice.actions

  return (
    <>
    <div className='w-full bg-[#7248B6] h-[100px] flex flex-row justify-around content-center items-center p-3 ' >
       <h1 className="text-white text-4xl font-bold">Redux Application</h1>
      <h1></h1>
      <h1></h1>
    </div>



    <div className=' w-full flex flex-row flex-wrap justify-center gap-5  md:p-4 content-center items-center'>


  {/* box 1 */}
      <div className=' w-full text-3xl md:w-[30%] h-[130px]  text-white text-center content-center'> 
  
         <div className='flex flex-col py-2  border-[#7248B6] gap-5 bg-white  text-black md:border-r-2 border-b-2 hover:border-r-[#09a2e4] hover:border-b-[#09a2e4] md:border-b-0 pb-6 '>

         <div className='max-w-full'>






<div  className="w-full">
  <div className="flex items-center border-b border-teal-500 py-2">
    
    
    <input className="appearance-none bg-transparent border-none w-[100%] text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-[18px]" type="text" placeholder=" type ... " aria-label="Full name"
    value={text} onChange={()=>setText(event.target.value)}
    />
    
    
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-lg border-4 text-white py-1 px-2 rounded" type="button"
    onClick={()=>{dispatch(addUser(text)) , setText("")}}
    >
   add user
    </button>





    <button onClick={()=>{dispatch(addTodo(text)) , setText("")}}
     className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-lg py-1 px-2 rounded" type="button">
      add todo
    </button>

  </div>
</div>



          {/* usercomponent */}

            <UserList/>





          {/* Todo component  */}

              <TodoList/>





          </div>
          <div className='flex flex-row justify-center gap-3'>
         
         
          </div>
          
          </div>

         </div>


 {/* end box 1 */}






    </div>
    </>
  )
}

export default App
