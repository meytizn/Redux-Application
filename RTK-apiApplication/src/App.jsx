

import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { postFetch } from './postSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(postFetch())
  },[])
  
  let {posts ,status} = useSelector((state)=>state)

  if(status=="loading ..."){
    return <h3 className='w-full h-[80vh] p-5 text-center font-2xl'>عملیات در حال انجام است  </h3>
  }
  else if(status=="failed ..."){
    return <h3 className='text-red-700 w-full h-[80vh] p-5 text-center font-2xl'>عملیات با خطا مواجه شد </h3>
  }
  console.log("Status:", status);
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

         <div className=' rounded-md border bg-green-400 p-5 text-[22px] w-[95%] m-auto '>
            <h5>api caller using async thunk RTK </h5>  
            <h5>{status && "عملیات با موفقیت انجام شد"}</h5>
          </div>
          <div className='flex flex-row justify-center gap-3'>
         
         {/* <button className='button w-[40%] border' onClick={()=>{dispatch(increase())}}>+</button>
          <button className='button w-[40%] border' onClick={()=>{dispatch(decrease())}}>-</button>
           */}
           <ul className='flex flex-col gap-3 w-[95%] m-auto '>
            {posts.map((post)=>(
              <li className='bg-blue-400 rounded-md p-3' key={post.id}>{post.id} - {post.title}</li>
            ))}
           </ul>
         
          </div>
          
          </div>

         </div>


 {/* end box 1 */}






    </div>
    </>
  )
}

export default App
