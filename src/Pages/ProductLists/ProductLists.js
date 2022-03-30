import React from 'react'
import './ProductLists.css'
import Product from '../../Components/Product'
import { useProductLists } from '../../Context/ProductContext'
import Filters from '../../Components/Filters'

const ProductLists = () => {
  const {productLists} =useProductLists()
  return (
    <div className='main-container'>
      <Filters/>
      <section className='wrapper'>
        <div className='grid'>
        {productLists && productLists.map((product)=><Product key={product._id} product={product}/>)}
        </div>
        </section>
    </div>
  )
}

export default ProductLists