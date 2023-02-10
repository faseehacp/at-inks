import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Main = (props) => {
  return (
    <div className='main'>
      <Banner 
        categories={props.categories} 
        setCategories={props.setCategories} 
        onCategoriesFilter={props.onCategoriesFilter}
        onSearch={props.onSearch}
        onChange={props.onChange}
      />
      <Products
        products={props.products}
        category={props.category}
        loading={props.loading}
      />
    </div>
  )
}

export default Main