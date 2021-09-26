import React, { Component,Fragment } from 'react'
import { getProduct } from '../../actions/productAction';
import { connect } from 'react-redux';
import { Spin, Space, Button, Rate } from 'antd';
import NavBar from '../general/NavBar';
class productDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            product: null
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getProduct(id);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps && nextProps.product){
            const product = nextProps.product;
            this.setState({product});
        }
    }

    render() {
        
        const {product} = this.state;
        return (
            <Fragment>
            <NavBar/>
            <section className="productDetail"> 
            <div className="container">
                {product ? (
                    <Fragment>
                        
                        <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img src="/assets/images/eshop.jpg" alt="product" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h1 style={{margin:"0"}}>{product.name}</h1>
                        <p className="lead" style={{margin:"0"}}>Description:{product.description}</p>
                        <Rate disabled allowHalf defaultValue={product.rating} />
                        <p className="lead" style={{margin:"0"}}>Quantity: {product.quantity}</p>
                        <h1>Rp.{product.price}</h1>
                        <Button type="primary"> Add to cart</Button>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <h1>Product Details</h1>
                <p className="lead"><b>{product.details}</b></p>
                </Fragment>
                )
                : 
                <Space size="middle">
                <Spin size="large" />
                </Space>
                }
            </div>
            </section> 
            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>({
    product: state.products.product,
});
export default connect(mapStateToProps,{getProduct})(productDetails);