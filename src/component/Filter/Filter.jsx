import React, { useEffect, useRef, useState } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";

const Filter = ({ HandleFilter }) => {

  const [state, setState] = useState(false);
  const filterMenu = useRef();
  const [changeLable,setChangeLabel] = useState("No Filter");

  // handle drop down menu
  const HandleDropDown = () => {
    setState(state => !state);
  }

  const HandleOptionClick = (status) => {
    setState(false)
    HandleFilter(status);
    setChangeLabel(status);
  }

  useEffect(() => {
    const handleMenu = (event) => {
      if (filterMenu.current && !filterMenu.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleMenu);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  }, []);


  return (
    <ul className='mb-2 '>
      <li className='shadow shadow-blue-500 w-[20%] p-2 m-auto flex items-center justify-between rounded-md cursor-pointer font-bold text-gray-500' onClick={HandleDropDown} >{changeLable}<BiSolidDownArrow className={`${state ? "rotate-180" : "rotate-0"}`} /></li>
      <li className='relative h-[80px] flex justify-center' ref={filterMenu} >
        {state &&
          <ul className='shadow w-[20%] flex flex-col gap-3 items-center p-2 rounded-md absolute bg-gray-50 top-2 z-10' >
            <li className='hover:bg-blue-400 w-[100%] text-center p-2 cursor-pointer rounded-md text-gray-500 font-bold hover:text-white ' onClick={() => HandleOptionClick("No Filter")}>No Filter</li>
            <li className='hover:bg-blue-400 w-[100%] text-center p-2 cursor-pointer rounded-md text-gray-500 font-bold hover:text-white' onClick={() => HandleOptionClick("Pending")}>Pending</li>
            <li className='hover:bg-blue-400 w-[100%] text-center p-2 cursor-pointer rounded-md text-gray-500 font-bold hover:text-white ' onClick={() => HandleOptionClick("Completed")}>Completed</li>
          </ul>
        }
      </li>
    </ul>
  )
}

export default Filter