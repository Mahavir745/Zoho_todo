import React, { useState } from 'react'
import Header from './component/Header/Header'
import AddTask from './component/Container/AddTask'
import Filter from './component/Filter/Filter'
import List from './component/Container/List'
import HandleAppStoreProvider from './Store/AppStore'

const App = () => {

  const [filterData,setFilterData] = useState([]);
  const [foundTitle,setFoundTitle] = useState("Status"); 

  return (
    <HandleAppStoreProvider>
    <div className='flex items-center min-h-[40vh]'>
      <div className='w-[700px] m-auto'>
        <Header/>
        <Filter setFoundTitle={setFoundTitle}/>
        <AddTask/>
        <List filterData={filterData} foundTitle={foundTitle}/>
      </div>
    </div>
    </HandleAppStoreProvider>
  )
}

export default App