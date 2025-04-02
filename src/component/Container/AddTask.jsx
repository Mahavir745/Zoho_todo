import React, { useRef } from 'react'

const AddTask = ({HandleAddTask}) => {

  const task = useRef();

  // Task added:

  const HandleForm = (e)=>{
    e.preventDefault();

    let newtask = task.current.value;
    let id = Date.now();

    let task_obj = {
      task:newtask,
      id,
      status:"Pending",
    }
    HandleAddTask(task_obj);
    task.current.value = " ";
  }


  return (
    <form action="" className='flex justify-center items-center gap-4 ' onSubmit={(e)=> HandleForm(e)}>
      <input type="text" className='shadow shadow-pink-400 focus:outline-0 p-2  pl-4 rounded-md w-[60%] text-gray-600' placeholder='Your task' ref={task}/>
      <button type='submit' className=' p-2 pl-10 pr-10 bg-green-500 text-white rounded-md hover:scale-95'>Add</button>
    </form>
  )
}

export default AddTask