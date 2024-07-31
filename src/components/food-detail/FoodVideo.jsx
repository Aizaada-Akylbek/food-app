import React from 'react'

const FoodVideo = (props) => {
    const {youtube}=props
  return (
    <div className='video text-center'>

    <iframe width="560" height="315"
    //strYoutube
    //"https://www.youtube.com/watch?v=    2l3-dBdNehY"
     // src="https://www.youtube.com/embed/    g6v_vbqKYeU"
     src={youtube.replace('/watch?v=', '/embed/')}
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

    </iframe>
   </div>
  )
}

export default FoodVideo