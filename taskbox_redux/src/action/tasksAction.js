import axios from 'axios'
export const startGetTasks=()=>{
    return(dispatch)=>{
         axios.get('http://localhost:3033/api/tasks')
         .then((response)=>{
             const result=response.data
             
             dispatch(setTasks(result))
             dispatch(toggleLoading())
         })
    
       
    }
}
 const setTasks=(result)=>{
    return{
        type:'GET_TASKS',
        payload:result
    }
}
export const startPostTasks=(task)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3033/api/tasks',task)
        .then((response)=>{
            const result=response.data
            dispatch(setPostTasks(result))
        })
}
}
const setPostTasks=(result)=>{
    return{
        type:'POST_TASKS',
        payload:result

    }
}
export const startDeleteTasks=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response)=>{
            const result=response.data
            dispatch(setDeleteTasks(result))

        })
    }
}
const setDeleteTasks=(result)=>{
    return{
        type:'DELETE_TASKS',
        payload:result.id
    }
}
export const startEditTasks=(task)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3033/api/tasks/${task.id}`,task)
        .then((response)=>{
            const result=response.data
            dispatch(setUpdateTasks(result))
        })
    }
}
const setUpdateTasks=(result)=>{
    return{
        type:'UPDATE_TASKS',
        payload:result
    }
}
 export const toggleLoading=()=>{
    return{
        type:'TOGGLE_LOADING'
    }
}