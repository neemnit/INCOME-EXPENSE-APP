import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'
import configureStore from'./store/configurestore'
import {Provider} from 'react-redux'
const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
  console.log('state',store.getState())
})
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))