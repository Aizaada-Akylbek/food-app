import React from 'react'
import {Link} from 'react-router-dom'
//Props

const Card = (props) => {
    const {foodName, foodId, foodImg, foodCategory}=props
  return (
    <div className="card" style={{width:220}}>
        <img src={foodImg} class="card-img-top" alt="..." />
        <div className="card-body text-center">
            <h5 class="card-title">{foodName}</h5>
            <p>Category: {foodCategory}</p>
            {/* <Link to='/food-info/' className="btn btn-primary">more</Link> */}
            <Link to={`/food-info/${foodId}`} className="btn btn-primary">more</Link>
        </div>
    </div>
  )
}

export default Card