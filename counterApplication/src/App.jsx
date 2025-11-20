
import { addToCounter, removeFromCounter } from './actions'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
function App() {
 
  let counter =useSelector((state)=>state.counter) 
 
  let dispatch = useDispatch()

  return (
    <>
    <div className='w-full bg-[#7248B6] h-[100px] flex flex-row justify-around content-center items-center p-3 ' >
       <h1 className="text-white text-4xl font-bold">Redux Application</h1>
      <h1></h1>
      <h1></h1>
    </div>



    <div className=' w-full flex flex-row flex-wrap justify-center gap-5  md:p-4 content-center items-center'>


  {/* box 1 */}
      <div className=' w-[100%] text-3xl md:w-[30%] h-[130px]  text-white text-center content-center'> 
  
         <div className='flex flex-col py-2  border-[#7248B6] gap-5 bg-white  text-black md:border-r-2 border-b-2 hover:border-r-[#09a2e4] hover:border-b-[#09a2e4] md:border-b-0 pb-6 '>

         <div className='max-w-full'><h3>counter : {counter}</h3></div>
          <div className='flex flex-row justify-center gap-3'>
         <button className='button w-[40%] border' onClick={()=>{dispatch(addToCounter())}}>+</button>
          <button className='button w-[40%] border' onClick={()=>{dispatch(removeFromCounter())}}>-</button>
          
          </div>
          
          </div>

         </div>


 {/* end box 1 */}






    </div>
    </>
  )
}

export default App
