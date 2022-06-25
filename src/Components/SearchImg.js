import React from 'react'

const SearchImg = (props) => {
  return (
    <div className='search-picture'>
      <p>Author:</p>
      <h2>{props.item.photographer}</h2>
      <div className="search-picture__container">
        <img src={props.item.src.large} alt="photo" />
      </div>
      <p style={{display:"block",textAlign:"start",paddingBottom:"10px",borderBottom:"1px solid #aaa"}}>Title:</p>
      <h3>{props.item.alt}</h3>
      <p>
        Download Image : 
        <a href={props.item.src.large} target="_blank">Click here !</a>
      </p>
  </div>
  )
}

export default SearchImg