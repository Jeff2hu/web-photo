import React from 'react';
import Input from './Components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiFillBell } from '@react-icons/all-files/ai/AiFillBell';
import { AiFillHome } from '@react-icons/all-files/ai/AiFillHome';
import { AiOutlineArrowUp } from '@react-icons/all-files/ai/AiOutlineArrowUp';

const Nav = (props) => {
  
  const [pageShow,setPageShow] = useState(false);
  const [remindShow,setRemindShow] = useState(false);
  const [toTopShow,setToTopShow] = useState(false);

  window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
      setToTopShow(true)
    }else{
      setToTopShow(false);
    }
  })

  const pageHandler = () => {
    setPageShow(!pageShow);
  }
  const remindHandler = () => {
    setRemindShow(!remindShow);
  }



  return (
    <div className='nav'>
      <h1><Link to="/web-photo" className='nav-title'>Searchinng</Link></h1>
      <Input setInput={props.setInput} search={props.search}/>
      <ul>
        <li className='nav-page' onClick={pageHandler}>
          <a href="#"><AiFillHome /></a>
          <ul className={"nav-page__description" + (pageShow?" show":"")}>
            <li><Link to="/web-photo">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </li>
        <li className='nav-remind' onClick={remindHandler}>
          <a href="#"><AiFillBell /></a>
          <ul className={"nav-remind__description" + (remindShow?" show":"")}>
            <li><a href="#">1. Welcome to PhotoSearch Website !</a></li>
            <li><a href="#">2. Enjoy yourself !</a></li>
          </ul>
        </li>
      </ul>
      <a className={"topJump" + (toTopShow?" topShow":"")} onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}><AiOutlineArrowUp /></a>
    </div>
  )
}

export default Nav