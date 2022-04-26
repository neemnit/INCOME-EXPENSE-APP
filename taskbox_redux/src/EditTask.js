
import React from "react";
import { useDispatch } from "react-redux";
import { startEditTasks } from "./action/tasksAction";
import TaskForm from "./TaskForm";
const EditTask=(props)=>{
    const{id,title,status,handleToggle}=props
    const dispatch=useDispatch()
    const formSubmit=(task)=>{
        dispatch(startEditTasks(task))
        handleToggle()
    }
    return (
        <div>
            <h2>EditTask</h2>
            <TaskForm
            id={id} title={title} status={status}
            formSubmit={formSubmit}/>
        </div>
    )
}
export default EditTask