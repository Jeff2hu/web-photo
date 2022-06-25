import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pictures from '../Components/Pictures';
import Recommend from '../Components/Recommend';

const HomePage = (props) => {

  return (
    <>
      <div className='homePage'>
        <div className="homePage-text">
            <p>Searching for a perfect img?</p>
            <p>Save the scenery while traveling?</p>
            <p style={{borderBottom:"2px solid #aaa",paddingBottom:"30px"}} >Still looking for that can satisfy your aesthetic?</p>
            <h2>Searchinng</h2>
            <h4>Here is the best website !</h4>
            <p style={{width:"80%",borderBottom:"2px solid #aaa",paddingBottom:"30px"}}>Now ! It's your turn to try it !</p>
            <Link to="/search" ><button className='SearchBtn'>Start !</button></Link>
          </div>
        <div className="homePage-img"></div>
      </div>
      <Recommend data={props.data} input={props.input}/>
    </>
  )
}

export default HomePage