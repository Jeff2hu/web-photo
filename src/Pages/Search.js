import React from 'react'
import SearchImg from '../Components/SearchImg';

const Search = (props) => {


  return (
  <>
    <div className='search'>
      {props.data && props.data.map((item,index)=>{
          return <SearchImg item={item} key={index}/>
      })} 
    </div>
      <button className='loadMore' onClick={props.search}>Load more</button>
  </>
  )
}

export default Search