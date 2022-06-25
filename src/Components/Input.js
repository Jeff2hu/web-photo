import React,{ useState } from 'react';
import { GoSearch } from '@react-icons/all-files/go/GoSearch';
import { Link } from 'react-router-dom';

const Input = (props) => {

  const setInput = (e) => {
    props.setInput(e.target.value)
    setTimeout(()=>{
      e.target.value=""
    },10000)
  }

  return (
    <div className='input'>
      <div className="input-text">
        <input type="text" className='input-text__description' onChange={setInput}/>
        <h2 className='search-icon'><GoSearch /></h2>
      </div>
      <Link to="/search"><button className='input-button' onClick={props.search}>Search</button></Link>
    </div>  
  )
}

export default Input