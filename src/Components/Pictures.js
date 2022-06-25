import React from 'react'

const Pictures = (props) => {
  return (
    <div className='recommend-photos__picture'>
      {/* <h3>{props.item.photographer}</h3> */}
      <div className="recommend-photos__picture__container">
        <img src={props.item.src.large} alt="photo" />
      </div>
      <p>
        Download Image : 
        <a href={props.item.src.large} target="_blank">Click here !</a>
      </p>
    </div>
  )
}

export default Pictures