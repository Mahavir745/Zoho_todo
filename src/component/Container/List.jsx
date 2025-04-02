import React, { useContext, useEffect, useState } from 'react'
import Item from './Item';
import Welcome from './Welcome';
import { handleAppStore } from '../../Store/AppStore';

const List = ({ foundTitle }) => {

  let { allData } = useContext(handleAppStore)

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    let data = allData.filter(item => item.status === foundTitle);
    console.log(data)

    if (data.length > 0) {
      setFilterData(data);
    }
    else if (data.length === 0 && foundTitle === "Status") {
      setFilterData(allData)
    }
    else{
      setFilterData([])
    }

  }, [foundTitle, allData])

  return (
    <div>
      <ul className=' mt-10 h-[500px] overflow-y-scroll pt-2 flex flex-col gap-2 items-center'>
        {filterData.length === 0 && <Welcome />}
        {filterData.map((item, index) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default List