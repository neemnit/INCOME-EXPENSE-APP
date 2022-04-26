const initialTasks={
    loading:true,
    data:[],
    errors:{}
}
const tasksReducer=(state=initialTasks,action)=>{
    switch(action.type){
        case 'GET_TASKS':{
            
           return {...state,data:[...action.payload]}
        }
        case 'POST_TASKS':{
            const result= {...state,data:[...state.data,{...action.payload}]}
            console.log('result',result)
            return result
        }
        case 'DELETE_TASKS':{
            return{...state,data:state.data.filter((task)=>{
                return task.id!==action.payload
            })
        }}
        case 'UPDATE_TASKS':{
           const result= state.data.map((task)=>{
                if(task.id===action.payload.id){
                return {...action.payload}
                }
                else{
                    return {...task}
                }
                
               
            })
            
            return {...state,data:result}
        }
        case 'TOGGLE_LOADING':{
            return{...state,loading:!state.loading}
        }
        
        default:{
            return{...state}
        }
    }
}
export default tasksReducer