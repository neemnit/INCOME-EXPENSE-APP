import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { startPostTasks } from "./action/tasksAction";
import TaskForm from "./TaskForm";

const AddTask=(props)=>{
    const dispatch=useDispatch()
    const[isSaved,setIsSaved]=useState(false)
   // const{addItem}=props
    const formSubmit=(task)=>{
     
    dispatch(startPostTasks(task))
        setIsSaved(true)
       // setIsSaved(false)
    }
    const toggleIsSaved=()=>{
        setIsSaved(false)
    }

    return(
        <div><h2>Add Task</h2>
        <TaskForm formSubmit={formSubmit}
        isSaved={isSaved}
        toggleIsSaved={toggleIsSaved}/></div>
    )
}
export default AddTask