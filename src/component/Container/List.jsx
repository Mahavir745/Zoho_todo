import React from 'react'
import Item from './Item';
import Welcome from './Welcome';

const List = ({allData,HandleDeleteOption,MarkAsComplete,filterData,foundFilterLabel}) => {

  let newdata = [];
  if(filterData.length > 0){
    newdata = filterData;
  }
  else if(filterData.length == 0 && foundFilterLabel === "No Filter"){
    newdata = allData;
  }
  console.log(allData)

  return (
    <div>
      <ul className=' mt-10 h-[500px] overflow-y-scroll pt-2 flex flex-col gap-2 items-center'>
        {newdata.length === 0 && <Welcome/>}
        {newdata.map((item,index)=>(
          <Item item={item} key={item.id} HandleDeleteOption={HandleDeleteOption} MarkAsComplete={MarkAsComplete}/>
        ))}
      </ul>
    </div>
  )
}

export default List