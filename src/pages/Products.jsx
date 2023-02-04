import React from 'react'
import data from '../Data'
import Item from '../components/Item'

function Products() {
    const itemElements = data.products.map(item => {
        return <Item key={item.id} item={item} />
      })
  return (
    <div className='itemsContainer'>
        {itemElements}
    </div>
  )
}

export default Products