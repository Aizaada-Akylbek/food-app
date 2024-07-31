import React from 'react'

const FoodImgPreview = (props) => {
    const {foodName, foodImg}=props
  return (
    <div>
    <h3>{foodName}</h3>
   <img width={290} src={foodImg} alt="" />
</div>
  )
}

export default FoodImgPreview