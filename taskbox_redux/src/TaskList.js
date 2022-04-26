import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetTasks } from "./action/tasksAction";
import TaskItem from "./TaskItem";

const TaskList=(props)=>{
const tasks=useSelector((state)=>{
    return state.tasks
})
const dispatch=useDispatch()
useEffect(()=>{
    
    dispatch(startGetTasks())

 },[])


    
    return (
        <div>{ tasks.loading?<img src='iphone-spinner--v2.gif'/>:(<div>{
            tasks.data.length===0 ?(<div>
                <h2>No Task Found</h2>
                <p>Add your first Task</p></div>
            ):(<div><h1>My tasks-{tasks.data.length}</h1>
            {
                tasks.data.map((task)=>{
                    
                    return(
                        <TaskItem key={task.id} {...task}
                       />
                    )
                })
            } 
            </div>)
        }
            </div>)}
        </div>
    )
}
export default TaskList