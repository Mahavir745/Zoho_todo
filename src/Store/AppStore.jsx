import { createContext, useReducer } from "react";

export const handleAppStore = createContext({
  allData: [],
  addTaskData: () => { },
  deleteTask: () => { },
  markAsComplete: () => { },
});


const HandleAllData = (currentData, action) => {
  let newTask = currentData;

  switch (action.type) {
    case "ADD_DATA":
      newTask = [...currentData, action.payload];
      break;
    case "DELETE_TASK":
      newTask = currentData.filter(item => item.id !== action.payload);
      break;
    case "MARK_AS_COMPLETED":
      newTask = currentData.map((item) => (
        item.id ===  action.payload ? { ...item, status: "Completed" } : item
      ))
      break;

    default:
      console.log("no such method found");
  }

  return newTask
}


const HandleAppStoreProvider = ({ children }) => {

  const [allData, dispatchedAllData] = useReducer(HandleAllData, []);

  const addTaskData = (data) => {
    dispatchedAllData({
      type: "ADD_DATA",
      payload: data
    })
  }

  const deleteTask = (id) => {
    dispatchedAllData({
      type: "DELETE_TASK",
      payload: id
    })
  }

  const markAsComplete = (id) => {
    dispatchedAllData({
      type: "MARK_AS_COMPLETED",
      payload: id
    })
  }
  return (
    <handleAppStore.Provider value={{
      allData, addTaskData, deleteTask, markAsComplete
    }}>
      {children}
    </handleAppStore.Provider>
  )
}


export default HandleAppStoreProvider;