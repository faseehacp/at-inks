import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import './Home.css';

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [category, setCategory] = useState("Men & Women Fashion");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        setProductsData(products);
        setAllProducts(products);
        let categories = products.map(product => {
          return product.category
        }).filter((category, i, ar) => {
          return ar.indexOf(category) === i
        })
        setCategoriesData(categories)
        setLoading(false);
      })
  }, [])

  const onCategoriesFilter = (e) => {
    setCategory(e.target.value)
    if(e.target.value === 'All Categories') {
      setCategory('Men & Women Fashion');
      setProductsData(allProducts);
    } else {
      let filteredProducts = allProducts.filter((product) => {
        return product.category === e.target.value
      })
      setProductsData(filteredProducts);
    }
  }

  const onSearchHandler = (e) => {
    e.preventDefault();
    setCategory('Men & Women Fashion');
    if(e.target[0].value === "") {
      setProductsData(allProducts);
    } else {
      let filteredProducts = allProducts.filter((product) => {
        console.log(product.title.toLowerCase());
        return product.title.toLowerCase().includes(e.target[0].value.toLowerCase())
      })
      setProductsData(filteredProducts);
    }
  }

  const onChangeHandler = (e) => {
    if(e.target.value === '') {
      setCategory('Men & Women Fashion');
      setProductsData(allProducts);
    }
  }

  return (
    <div className="home">
      <Header />
      <Main 
        categories={categoriesData} 
        setCategories={setCategoriesData} 
        products={productsData} 
        setProducts={setProductsData} 
        onCategoriesFilter={onCategoriesFilter}
        category={category}
        onSearch={onSearchHandler}
        onChange={onChangeHandler}
        loading={loading}
      />
    </div>
  );
}

export default Home;