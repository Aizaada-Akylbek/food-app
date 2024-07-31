import React from 'react'
//useParams - адресный строкадан келген данныйларды useParams менен ала алабыз
//устуно чыккан айдини биздин элементтин ичине дагы корсотуп берет
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../axios'
import FoodImgPreview from '../components/food-detail/FoodImgPreview'
import FoodVideo from '../components/food-detail/FoodVideo'
import FoodIngredients from '../components/food-detail/FoodIngredients'
import FoodDescription from '../components/food-detail/FoodDescription'
// import { useEffect, useState } from 'react'

// let imgUrl='https://www.themealdb.com/images/ingredients/Lime-Small.png'
let imgUrl='https://www.themealdb.com/images/ingredients/'

const FoodDetail = () => {
  const [meal, setMeal]=React.useState(null)
  const [ingredients, setIngredients]=React.useState(null)
  const [mera, setMeasure]=React.useState(null)
  const params=useParams()
  console.log(params, '--params--');

  const getFood=async()=>{
    //www.themealdb.com -эта часть уже есть   /api/json/v1/1/lookup.php?i=   52772-а эта айди будет меняться 
    const {data}=await axios.get('/api/json/v1/1/lookup.php?i='+params.foodId)
    //2 boluk
    const meals=data.meals[0]
    console.log(meals, '--meals');
    //
    console.log(data.meals);
    setMeal(data.meals[0])
    //2 boluk
    const hasIngs=[]
    const measure=[]
    for(let i=1; i<21; i++){
      // console.log('strIngredient'+i);
      if(meals[`strIngredient${i}`]?.length>0){
        hasIngs.push(meals[`strIngredient${i}`])
        measure.push(meals[`strMeasure${i}`])


        console.log(meals[`strIngredient${i}`], i);
      }
    }
    setIngredients([...hasIngs])
    setMeasure([...measure])
  }
  // const navigate=useNavigate()
  // const back=()=>{
  //   navigate(-1)
  // }

  React.useEffect(()=>{
    getFood()
  },[])

  if (meal==null){
    return <h2>Loading</h2>
  }

  return (
    // <div>FoodDetail {params.foodId}</div>
    <div style={{padding:'0 80px'}}>

      <div className='d-flex gap-3'>

        <FoodImgPreview foodName={meal.strMeal} foodImg={meal.strMealThumb} />
        <FoodIngredients ingredients={ingredients} imgUrl={imgUrl}/>

     

      </div>
      
     <FoodDescription instructions={meal.strInstructions}/>
     <FoodVideo youtube={meal.strYoutube}/>
   

    </div>
  )
}

export default FoodDetail