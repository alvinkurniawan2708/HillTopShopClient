import React from 'react'

const Marketplace = () => {
    return (
        <section id="marketplace">
            <div class="container text-center mt-5 mb-5 py-5">
                <h1>Marketplace</h1>
                <p>HillTopShop marketplace such as Shopee, Tokopedia, and Bukalapak are available</p>
            </div>
    <div class="row">
        <div class="marketplace text-center col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="marketplace-img">
                <a href="#">
                    <img src="images/shopee.png" alt=""></img>
                </a> 
            </div>
        </div>
        <div class="marketplace text-center col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="marketplace-img">
             <a href="#"> <img src="images/tokopedia.jpg" alt=""></img></a>
            </div>
        </div>
        <div class="marketplace text-center col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <div class="marketplace-img">
             <a href="#">
                <img src="images/bukalapak.png" alt=""></img>
             </a> 
            </div>
        </div>
    </div>
</section>
    )
}

export default Marketplace;
