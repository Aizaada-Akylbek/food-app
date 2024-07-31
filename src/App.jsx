import React from 'react'
//ROUTES ROUTE
import { Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home'
import FoodDetail from './pages/FoodDetail'
import Auth from './pages/Auth'
//components
import Layout from './components/layout/Layout'
//style
import './App.css'


const App = () => {
  return (
    <div>
      {/* <Layout/> */}
      {/* <Home/> */}

    {/* 2boluk */}
      <Routes>
            <Route path='/' element={<Layout/>}>
              {/* <Route path='/' element={<Home/>}/> так нельзя писать похожик пути домой и поэтому можно изменить как указано в ниже */}
                <Route index element={<Home/>}/>
                <Route path='/food-info/:foodId' element={<FoodDetail/>}/>
                {/* foodId деген параметр деп аталат */}

                <Route path='/login' element={<Auth/>}/>
            </Route>

        </Routes>
    </div>
  )
}

export default App
