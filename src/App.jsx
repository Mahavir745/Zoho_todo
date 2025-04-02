import React, { useState } from 'react'
import Header from './component/Header/Header'
import AddTask from './component/Container/AddTask'
import Filter from './component/Filter/Filter'
import List from './component/Container/List'

const App = () => {

  // todo data storing part:
  const [allData,setAllData] = useState([]);
  const [filterData,setFilterData] = useState([])
  const [foundFilterLabel ,setFoundFilterLabel] = useState("No Filter");

  const HandleAddTask = (task)=>{
    let newTask = [...allData,task];
    setAllData(newTask);
  }


  // handle delete option

  const HandleDeleteOption = (id)=>{
    let newTask = allData.filter(item => item.id !== id);
    setAllData(newTask);
  }

  // handle marks as completed

  const MarkAsComplete = (id)=>{
    let newTask = allData.map((item)=>(
      item.id === id ? {...item,status:"Completed"}: item
    ))

    setAllData(newTask)
  }


  // handle filter

  const HandleFilter = (status) => {
    setFoundFilterLabel(status);
    if (status === "No Filter") {
      setFilterData(allData); 
    } else {
      const filtered = allData.filter((item) => item.status === status);
      setFilterData(filtered);
      console.log(filtered)
    }
  }


  return (
    <div className='flex items-center min-h-[40vh]'>
      <div className='w-[700px] m-auto'>
        <Header/>
        <Filter HandleFilter={HandleFilter}/>
        <AddTask HandleAddTask={HandleAddTask}/>
        <List allData={allData} HandleDeleteOption={HandleDeleteOption} filterData={filterData} MarkAsComplete={MarkAsComplete} foundFilterLabel={foundFilterLabel}/>
      </div>
    </div>
  )
}

export default App