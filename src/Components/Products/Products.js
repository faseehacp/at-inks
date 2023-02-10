import React from 'react'
import Product from '../Product/Product';

const Products = (props) => {
  return (
    <div className='products-section'>
        <div className="container">
            {props.products.length > 0 && <h2>{props.category}</h2>}
            <Product products={props.products} />
        </div>
    </div>
  )
}

export default Products