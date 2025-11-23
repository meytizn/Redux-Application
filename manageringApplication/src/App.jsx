
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addProduct, addUser } from './actions'
import { useState } from 'react'

function App() {
 
  const users = useSelector((state)=>state.users)
  const products = useSelector((state)=>state.products)

  const[mytext ,setMytext]=useState("")
  const dispatch = useDispatch()
  

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
  
         <div className='w-[95%] m-auto flex flex-col py-2  border-[#7248B6] gap-5  text-black md:border-r-2 border-b-2 hover:border-r-[#09a2e4] hover:border-b-[#09a2e4] md:border-b-0 pb-6 '>

         <div className='max-w-full flex flex-col items-center gap-5 '>


          <input class=" bg-[#0F1419] placeholder:text-white text-white w-[95%] m-auto text-2xl bg-neutral-secondary-medium border border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand block  px-3 py-2.5 shadow-xs placeholder:text-body"
           type="text" placeholder='type somthing  ....  ' value={mytext} onChange={()=>setMytext(event.target.value)}/>




          <h3 className='bg-yellow-300 w-[95%] rounded-md p-4'>users : {users.map((user,index)=>(<span className='text-white font-medium' key={index}>   {index}-{user}   </span>))}</h3>
          <h3 className='bg-green-600 w-[95%] rounded-md p-4'>products :{products.map((product,index)=>(<span className='text-white font-medium' key={index}> {index}-{product}</span>))}</h3>
         

          </div>

         
          <div className='flex flex-row justify-center gap-3'>
         
         
         {/* <button className='button w-[40%] border' onClick={()=>{dispatch(addToCounter())}}>+</button>
          <button className='button w-[40%] border' onClick={()=>{dispatch(removeFromCounter())}}>-</button>
           */}


            
            <button type='submit'  className='button w-[40%] text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-base text-2xl px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55'
            onClick={()=>{dispatch(addUser(mytext) , setMytext(""))}}
            >add to userList </button>


            <button type='submit'  className='button w-[40%] text-white bg-[#0f1419] hover:bg-[#0f1419]/90 focus:ring-4 focus:outline-none focus:ring-[#0f1419]/50 box-border border border-transparent font-medium leading-5 rounded-base text-2xl px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-[#24292F] dark:focus:ring-[#24292F]/55 '
            onClick={()=>{dispatch(addProduct(mytext) , setMytext(""))}}
            >add to productList  </button>




          </div>
          
          </div>

         </div>


 {/* end box 1 */}






    </div>
    </>
  )
}

export default App
