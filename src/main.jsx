import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//ROUTER
import { BrowserRouter } from 'react-router-dom'
//context 
import AppContext from './context/AppContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContext>

    <App />
  </AppContext>
  </BrowserRouter>,
)
//npm i react-router-dom