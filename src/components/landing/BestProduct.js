import React, { useRef, useState,Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productAction';
import { Card,Rate } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import Product from '../general/Product';
// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper/core';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

const { Meta } = Card;
// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

class BestProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        };
    }
    componentDidMount(){
        this.props.getProducts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.products.products){
            const products = nextProps.products.products;
            this.setState({products});
        }
    }
    productDetails = (product) => {
        return (
          <ul>
            <li style={{listStyle:"none"}}>${product.price}</li>
          </ul>
        );
      };
    render() {
        const {products} = this.state;
        return (
            <section className="product-sec">
                <div className="container">
                <div className="container text-center py-5">
                    <h1>Our Featured Items</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut corrupti quas libero sunt excepturi?</p>
                </div>
                <div className="row py-5">
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                    }} className="mySwiper">
                {products.map((product,index)=>(
                    <SwiperSlide style={{width:300 , height: 530}}>
                        <Product
                        key={index}
                        link={`products/${product.id}`}
                        product={product}
                        description={this.productDetails(product)}
                        rating={product.rating}
                        buttonName="Add to Cart"/>
                    </SwiperSlide>
                ))}
                    </Swiper>
                </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state)=>({
    products: state.products,
});
export default connect(mapStateToProps,{getProducts})(BestProduct);