import React from 'react';
import NavBar from '../general/NavBar';
import Slider from './Slider';
import BestProduct from './BestProduct';
import Gallery from './Gallery';
import Marketplace from './Marketplace';
import Footer from '../general/Footer';
import 'antd/dist/antd.css';
// import Search from './Search';

 const index = () => {
    return (
        <div>
            <NavBar/>
            <Slider/>
            <BestProduct/>
            <Gallery/>
            <Marketplace/>
            <Footer/>
        </div>
    )
}

export default index;