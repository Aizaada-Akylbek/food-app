import React, {useState, useEffect} from 'react'
// import axiosCopy from '../axios'
import axios from '../axios'
// import { Link } from 'react-router-dom'
import Card from '../components/card/Card'

const Home = () => {
    const [meals, setMeals]=useState(null)


    const getFoods=async()=>{
        const {data}=await axios.get('/api/json/v1/1/search.php?f=b')
        console.log(data.meals);
        setMeals(data.meals)
    }
    useEffect(()=>{
        getFoods()
    }, [])
    
  return (
 
    <div className='d-flex flex-wrap gap-4'>
       {meals?.map(item=>{
        return(
            <div>
                <Card 
                key={item.idMeal} //
                    foodImg={item.strMealThumb} 
                    foodId={item.idMeal} 
                    foodName={item.strMeal} 
                    foodCategory={item.strCategory}
                    />
        </div>
            
        )
    })}
        
    </div>
  )
}

export default Home