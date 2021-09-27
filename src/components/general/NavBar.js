import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Avatar } from "antd";
import { logout } from '../../actions/authAction';
// import './script';

const NavBar = ({auth:{isAuthenticated},logout}) =>{
  const user = (
    <ul>
      <li>
        <nav className="navbar">
        <Link className="logo" to="/">HillTopShop</Link>
        <Link to="/">Home</Link>
        <Link to="#gallery">Shop</Link>
        <Link to="#"> Review</Link> 
        <i className="fas fa-search" id="search-icon"></i>
        <Link className="fas fa-shopping-cart" to="/cart"></Link>
        <Link onClick={logout}to="#!">Logout</Link>
        </nav>
      </li>
    </ul>
  )
  const guest = (
    <ul>
    <li>
      <nav className="navbar">
      <Link className="logo" to="/">HillTopShop</Link>
      <Link to="/">Home</Link>
      <Link to="#gallery">Shop</Link>
      <Link to="#"> Review</Link> 
      <i className="fas fa-search" id="search-icon"></i>
      <Link className="fas fa-shopping-cart" to="/cart"></Link>
      <Link className="fas fa-user" id="user-icon" to="/login"></Link>
      </nav>
    </li>
  </ul>
  )
    return (
      <section className="navbarSect">
        <header>
          
          {isAuthenticated ? user : guest}
        </header>
      </section>
    );
};

const mapStateToProps = state =>({
    auth:state.auth,
});

export default connect(mapStateToProps,{logout})(NavBar);