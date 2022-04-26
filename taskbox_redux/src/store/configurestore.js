import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tasksReducer from '../reducer/tasksReducer'
const configureStore=()=>{
    const store= createStore(combineReducers({
    tasks:tasksReducer
    
    }),applyMiddleware(thunk))
    return store
      }
      export default configureStore