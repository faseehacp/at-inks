import React from 'react';
import logo from '../../assets/logo.png';
import Header from '../../Components/Header/Header';

const NotFound = () => {
  return (
    <div className="home">
        <Header />
        <div className="inner-banner-section page-404">
            <div className="logo">
                <a href="/eflyer">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="container">
                <h2>Page Not Found</h2>
            </div>
        </div>
    </div>
  )
}

export default NotFound