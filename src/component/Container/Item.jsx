import React, { useContext, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { handleAppStore } from '../../Store/AppStore';

const Item = ({item}) => {

  const [tickMark,setTickMark] = useState(false);
  const {markAsComplete,deleteTask} = useContext(handleAppStore)

  // handel delete btn
  const handleDeleteBtn = (id)=>{
    deleteTask(id)
  }

  // handel mark as complete
  const handleMarkAsComplete = (id)=>{
    setTickMark(true);
    console.log(id)
    markAsComplete(id);
  }

  return (

    <li className={` ${item.status === "Completed"? "bg-gradient-to-r to-green-200":"bg-white"} shadow-md w-[80%] shadow-pink-400 rounded-md p-2 pl-4 text-[16px] font-medium flex items-center justify-between text-red-800 capitalize`}>
      <p>{item.task}</p>
      <div className='flex gap-4'>
        <MdDeleteOutline className='text-gray-700 text-4xl cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-2' onClick={()=>handleDeleteBtn(item.id)}/>
        {!tickMark && <LiaCheckDoubleSolid className='text-gray-700 text-4xl cursor-pointer hover:scale-90 hover:bg-green-600 hover:text-white rounded-full p-2' onClick={()=> handleMarkAsComplete(item.id)}/>}
      </div>
    </li>

  )
}

export default Item