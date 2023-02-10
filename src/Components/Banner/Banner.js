import React from 'react';
import logo from '../../assets/logo.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  const openSidenavHandler = () => {
    document.getElementById('sidenav').style.transform = "translateX(0%)";
    document.getElementById('sidenav').style.opacity = "1";
    document.getElementById('sidenav').style.transition = "transform 100ms ease-in-out, opacity 200ms";
  }

  const closeSidenavHandler = () => {
    document.getElementById('sidenav').style.transform = "translateX(-100%)";
    document.getElementById('sidenav').style.opacity = "0";
    document.getElementById('sidenav').style.transition = "transform 100ms ease-in-out, opacity 200ms";
  }
     
  return (
    <React.Fragment>
      <div className="banner-section">
        <div id="sidenav">
          <svg width="18" height="18" viewBox="0 0 24 24" onClick={closeSidenavHandler}><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
          <ul className="sidenav-menu">
            <li>
                <Link to="/best-sellers">Best Sellers</Link>
            </li>
            <li>
                <Link to="/gift-ideas">Gift Ideas</Link>
            </li>
            <li>
                <Link to="/new-releases">New Releases</Link>
            </li>
            <li>
                <Link to="/todays-deals">Today's Deals</Link>
            </li>
            <li>
                <Link to="/customer-service">Customer Service</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/eflyer">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="banner-header">
          <div className="container">
            <div className="banner-header-contents">
              <div className="hamburger-menu" onClick={openSidenavHandler}>
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                </svg>
              </div>
              <div className="filter">
                <select onChange={props.onCategoriesFilter}>
                    <option value="All Categories">All Categories</option>
                    {props.categories.map((category) => {
                        return <option value={category}>{category}</option>
                    })}
                </select>
              </div>
              <div className="searchbar">
                <form onSubmit={props.onSearch}>
                  <input type="text" name="search" placeholder='Search Products' onChange={props.onChange} />
                  <button type='submit' onSubmit={props.onSearch}><svg width="20px" height="24px" fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/></svg></button>
                </form>
              </div>
              <div className="language">
                <button>
                  <svg viewBox="0 0 1000 500" width="15px">
                    <g id="g578" transform="scale(16.667)">
                      <rect id="rect124" strokeWidth="1pt" fill="#000066" height="30" width="60" y="0" x="0"/>
                      <g id="g584">
                        <path id="path146" strokeWidth="1pt" fill="#ffffff" d="m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z"/>
                        <path id="path136" strokeWidth="1pt" fill="#ffffff" d="m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z"/>
                        <path id="path141" strokeWidth="1pt" fill="#cc0000" d="m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z"/>
                        <path id="path150" strokeWidth="1pt" fill="#cc0000" d="m0 30l20-10h4.472l-20 10h-4.472zm0-30l20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10l20-10h4.472l-20 10h-4.472zm24.472 20l-20-10h4.472l15.528 7.764v2.236z"/>
                      </g>
                    </g>
                  </svg> 
                  English 
                  <svg width="8" height="8" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></button>
              </div>
              <div className="cart">
                <button><svg fill="#fff" width="15" height="15" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z"/></svg> Cart</button>
              </div>
              <div className="cart">
                <button><svg fill="#fff" width="10" height="10" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg> Cart</button>
              </div>
            </div>
            <div className="mobile-header-contents">
              <div className="mobile-header-top">
                <div className="filter">
                  <select onChange={props.onCategoriesFilter}>
                      <option value="All Categories">All Categories</option>
                      {props.categories.map((category) => {
                          return <option value={category}>{category}</option>
                      })}
                  </select>
                </div>
                <div className="language">
                  <button>
                    <svg viewBox="0 0 1000 500" width="15px">
                      <g id="g578" transform="scale(16.667)">
                        <rect id="rect124" strokeWidth="1pt" fill="#000066" height="30" width="60" y="0" x="0"/>
                        <g id="g584">
                          <path id="path146" strokeWidth="1pt" fill="#ffffff" d="m0 0v3.3541l53.292 26.646h6.708v-3.354l-53.292-26.646h-6.708zm60 0v3.354l-53.292 26.646h-6.708v-3.354l53.292-26.646h6.708z"/>
                          <path id="path136" strokeWidth="1pt" fill="#ffffff" d="m25 0v30h10v-30h-10zm-25 10v10h60v-10h-60z"/>
                          <path id="path141" strokeWidth="1pt" fill="#cc0000" d="m0 12v6h60v-6h-60zm27-12v30h6v-30h-6z"/>
                          <path id="path150" strokeWidth="1pt" fill="#cc0000" d="m0 30l20-10h4.472l-20 10h-4.472zm0-30l20 10h-4.472l-15.528-7.7639v-2.2361zm35.528 10l20-10h4.472l-20 10h-4.472zm24.472 20l-20-10h4.472l15.528 7.764v2.236z"/>
                        </g>
                      </g>
                    </svg> 
                    English 
                    <svg width="8" height="8" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></button>
                </div>
                <div className="cart">
                  <button><svg fill="#fff" width="15" height="15" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z"/></svg> Cart</button>
                </div>
                <div className="cart">
                  <button><svg fill="#fff" width="10" height="10" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg> Cart</button>
                </div>
              </div>
              <div className="mobile-header-bottom">
                <div className="hamburger-menu" onClick={openSidenavHandler}>
                  <svg width="40" height="40" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                  </svg>
                </div>
                <div className="searchbar">
                  <form onSubmit={props.onSearch}>
                    <input type="text" name="search" placeholder='Search Products' onChange={props.onChange} />
                    <button type='submit' onSubmit={props.onSearch}><svg width="20px" height="24px" fill="#fff" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/></svg></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="banner-slider">
            <Carousel infiniteLoop>
              <div>
                <h2>Get Start Your Favourite Shopping</h2>
                <button>BUY NOW</button>
              </div>
              <div>
                <h2>Shopping Experience In Your Finger Tip</h2>
                <button>BUY NOW</button>
              </div>
              <div>
                <h2>Welcome To The World Of Fashion</h2>
                <button>BUY NOW</button>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner