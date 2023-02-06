import React from 'react'
import data from '../Data'
import Item from '../components/Item'
import { useDispatch, useSelector } from 'react-redux'
import { getDummyData } from '../features/productsSlice'

function Products() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)

    React.useEffect(() => {
      dispatch(getDummyData())
    }, [])

    console.log(products.productsItem)

    const itemElements = products.productsItem.map(item => {
        return <Item key={item.id} item={item} />
      })
  return (
    <div className='itemsContainer'>
        {products.isLoaded ? itemElements : (
          <h1>...Loading</h1>
        )}
    </div>
  )
}

export default Products