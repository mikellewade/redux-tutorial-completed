import React from 'react'
import '../item.css'

function Item(props) {
  return (
    <div className='itemContainer'>
        <img className="itemImage" src={props.item.images[0]}/>
        <div>{props.item.title}</div>
        <div>${props.item.price}.00</div>
        <button style={ {"marginTop": "5px"}}>Add</button>
    </div>
  )
}

export default Item