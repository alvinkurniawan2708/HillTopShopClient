import React from 'react'

 const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
        <div className="row">
            <div className="col-4 aboutUs">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste odit asperiores accusamus maxime animi nemo, fugiat hic, eaque blanditiis voluptatibus distinctio nostrum? A officia ipsam, impedit sit iure tenetur!</p>
            </div>
            <div className="col-4 quickLink">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our Products</a></li>
                    <li><a href="#">Marketplace</a></li>
                </ul>
            </div>
            <div className="col-4 contactUs">
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <span><i className="fas fa-map-marker-alt"></i></span>
                    </li>
                    <li>
                        <span><i className="fas fa-phone-square-alt"></i></span>
                    </li>
                    <li>
                        <span><i className="fas fa-envelope"></i></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
    )
}

export default Footer;