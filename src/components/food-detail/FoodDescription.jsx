import React from 'react'

const FoodDescription = (props) => {
    const {instructions}=props
  return (
    <div className='text-center'>
        <h3>Instructions</h3>
        <p>{instructions} </p>
      </div>
  )
}

export default FoodDescription