import React from 'react';
import Pictures from './Pictures';

const Recommend = (props) => {
  return (
    <div className='recommend'>
      <div className="recommend-title">
        <h3>Recommend</h3>
        <div className="recommend-title__btn" onClick={(e)=>{props.input(e.target.innerText)}}>
          <button>smile</button>
          <button>night</button>
          <button>programming</button>
          <button>cake</button>
          <button>animal</button>
          <button>river</button>
        </div>
      </div>
      <div className="recommend-photos">
        {props.data && props.data.map((item,index)=>{
          return <Pictures item={item} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Recommend