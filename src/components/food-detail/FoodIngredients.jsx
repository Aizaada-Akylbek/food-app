import React from 'react'
import { useNavigate } from 'react-router-dom'

const FoodIngredients = (props) => {
    const {ingredients, imgUrl}=props
    const navigate=useNavigate()
    const back=()=>{
      navigate(-1)
    }
  return (
    <div>
        
          <div className='d-flex justify-content-between'>
           <h3>Ingridients</h3>
            <button onClick={back} style={{border:'none', padding:'10px 20px', borderRadius:'6px'}}>go back</button>
          </div>
          <div className='d-flex flex-wrap text-center'>
            {ingredients.map(el=><div>
              <img width={80} src={imgUrl+el+'.png'} alt={el} />
              <p>{el}</p>
            </div>
            )}
          </div>
    
    </div>
  )
}

export default FoodIngredients