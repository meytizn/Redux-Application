
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToDO, removeToDO } from './actions'
function App() {

  const[text,setText]=useState("")
  
  const dispatch = useDispatch()

  const todos = useSelector((state)=>state.todos)


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

         <div className='max-w-full '>
         








          {/* form component */}

          <input className='p-4' type="text" placeholder='type ...'
          value={text} onChange={()=>setText(event.target.value)} />



          
          <button 
          className='my-5 button w-[40%] border p-2'
          type='submit'
           onClick={()=>{
            if (text!=="") {
              dispatch(addToDO(text)) 
              setText("")
            }
            
            }}>add task </button>
          
          



          {/* end form component */}










          </div>

          
          







            {/* being an ul and a  li component  */}


          <ul className='flex flex-col gap-3 my-2' >

          {todos.map(
            
            (todo)=>(<li key={todo.id} className='hover:bg-[#09a2e46e] bg-purple-300 w-[95%] m-auto border p-2 flex flex-row justify-between'>
            
            <span>{todo.text}</span>
            
           <button
            className='bg-red-500 button  border p-2 text-[18px] '
            type='submit' onClick={()=>dispatch(removeToDO(todo.id))} >Remove</button>
            </li>))}


            </ul>






            {/* end of being an ul and a  li component  */}












          
          </div>

         </div>

            

 {/* end box 1 */}






    </div>
    </>
  )
}

export default App
