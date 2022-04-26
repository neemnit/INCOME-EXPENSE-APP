import React, { useState } from "react";

import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { startDeleteTasks } from "./action/tasksAction";
const TaskItem=(props)=>{
    const{id,title,status}=props
    const[toggle,setToggle]=useState(false)
    const dispatch=useDispatch()
    const handleRemove=()=>{
        const confirm=window.confirm('Are you sure want to delete ?')
        if(confirm){
        
        dispatch(startDeleteTasks(id))
        }
        
        
    }
    const handleToggle=()=>{
        const result=!toggle
        setToggle(result)
    }
    return(
        <div>{
            toggle?(
                <div>
                <EditTask 
                id={id} title={title} status={status}
            
                handleToggle={handleToggle}/>
                <button onClick={handleToggle}>Cancel</button></div>
            ):(
                <div>
                   {
                       status? <h3 style={{color:'green'}}>{title}</h3>: <h3 style={{color:'red'}}>{title}</h3>
                   } 
            <button onClick={handleToggle}>edit</button>
            <button onClick={handleRemove}> remove</button></div>
            )
            }

           
        </div>
    )
}
export default TaskItem