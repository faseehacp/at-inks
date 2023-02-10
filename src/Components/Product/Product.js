import React from 'react'

const Product = (props) => {
  return (
    <div className="products">
        {props.products.length > 0 ? props.products.map((product) => {
            return (
                <div className='product-card'>
                    <h3 title={product.title}>{product.title.slice(0, 18) + ".."}</h3>
                    <p>Price <span>$ {product.price}</span></p>
                    <img src={product.image} alt="Product Image" />
                </div>
            )
        }) : 
            <p>No Products Found!</p>
        }
    </div>
  )
}

export default Product