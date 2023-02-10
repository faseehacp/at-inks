import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <React.Fragment>
            <div className="header">
                <ul className="header-menu">
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
        </React.Fragment>
    )
}

export default Header;