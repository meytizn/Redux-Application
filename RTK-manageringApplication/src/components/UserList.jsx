import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from '../slices/userSlice'

const UserList = () => {
    
    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    const { removeUser} = userSlice.actions
    
  return (
    
        <ul className=' bg-blue-500   flex flex-col gap-3 mt-5 p-2'>




         <h3 className='text-white  focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-1xl px-4 py-2.5 text-center leading-5'>
            users : {users.length}
          </h3>


           {users.map((user)=>(<li className='flex w-[95%] m-auto rounded-md flex-row justify-between text-white bg-white p-3 ' key={user.id}>
          
                  <span className='text-black'> {user.name}   </span>
                        <button  onClick={()=>{dispatch(removeUser(user.id))}} 
                          className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-base text-[20px] px-4 py-2.5 text-center leading-5'
                          >removeUser</button>
          
           </li>))} 

        </ul>

  )
}

export default UserList
