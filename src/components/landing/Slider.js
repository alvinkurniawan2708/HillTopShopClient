import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import "swiper/components/navigation/navigation.min.css"
import '../../App.css';
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);


const Slider = () =>{
    return (
        <section className="swiper">
            <Swiper autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
            }} pagination={{
            "clickable": true
            }} className="mySwiper">
                <SwiperSlide>
                <div className="container-fluid">
                        <div className="container content">
                            <h3>KYT FullFace Helm</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Neque at assumenda nesciunt nihil illo fugiat laboriosam ipsum rem, reiciendis quaerat.</p>
                            <a href="#" className="btn">See Items</a>
                        </div>
                        <div className="image">
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" srcset=""></img>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid">
                        <div className="container content">
                            <h3>KYT FullFace Helm</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Neque at assumenda nesciunt nihil illo fugiat laboriosam ipsum rem, reiciendis quaerat.</p>
                            <a href="#" className="btn">See Items</a>
                        </div>
                        <div className="image">
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" srcset=""></img>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid">
                        <div className="container content">
                            <h3>KYT FullFace Helm</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Neque at assumenda nesciunt nihil illo fugiat laboriosam ipsum rem, reiciendis quaerat.</p>
                            <a href="#" className="btn">See Items</a>
                        </div>
                        <div className="image">
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" srcset=""></img>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid">
                        <div className="container content">
                            <h3>KYT FullFace Helm</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Neque at assumenda nesciunt nihil illo fugiat laboriosam ipsum rem, reiciendis quaerat.</p>
                            <a href="#" className="btn">See Items</a>
                        </div>
                        <div className="image">
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" srcset=""></img>
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="container-fluid">
                        <div className="container content">
                            <h3>KYT FullFace Helm</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Neque at assumenda nesciunt nihil illo fugiat laboriosam ipsum rem, reiciendis quaerat.</p>
                            <a href="#" className="btn">See Items</a>
                        </div>
                        <div className="image">
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" srcset=""></img>
                        </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        
    )
};

export default Slider;


