
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { apiAction } from './redux/actions'
function App() {

  let {isLoading , data ,error} = useSelector((state)=>state)
  const dispatch = useDispatch()
  console.log({data})

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
          


            <button
             onClick={()=>dispatch(apiAction())}
             type="button" className="text-2xl text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 box-border border border-transparent focus:outline-none font-medium leading-5 rounded-base  px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50">
              api Fetcher
              </button>


          </div>
          <div className='flex flex-col justify-center gap-3'>
         

            {isLoading && <div>loading ... </div> }
            {data.map((item)=><li className='bg-yellow-300 p-2 border rounder-md w-[95%] m-auto ' key={item.id}>{item.title}</li>)}
            {error && <div>{error} </div> }
          </div>
          
          </div>

         </div>


 {/* end box 1 */}






    </div>
    </>
  )
}

export default App
