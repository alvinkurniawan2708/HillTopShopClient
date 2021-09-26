import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
// import './script';

const NavBar = () =>{
    return (
      <section>
        <header>
        <Link className="logo" to="/">HillTopShop</Link>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="#gallery">Shop</Link>
          <Link to="#">Review</Link>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <Link className="fas fa-shopping-cart" to="/cart"></Link>
          <i className="fas fa-user" id="user-icon"></i>
        </div>
        </header>
      </section>
    );
};

const mapStateToProps = state =>({
    auth:state.auth,
});

export default connect(mapStateToProps)(NavBar);