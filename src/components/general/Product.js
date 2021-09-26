import React from "react";
import { Card, Button,Rate } from "antd";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Product = ({
  product,
  description,
  buttonName,
  link,
}) => {
  return (
  
    <div style={{ padding: "10px"}}>
      <Link to={link}>
      <Card
        hoverable
        style={{ width: 300,textAlign: 'center',fontWeight:700}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <div className="content">
            <div className="itemName">
                <h3>{product.name}</h3>
            </div>
            <div className="itemPrice">
                <h2>Rp. {product.price}</h2>
            </div>
        </div>
        <Rate disabled allowHalf defaultValue={product.rating} />
        <br />
        <Button type="primary" style={{marginTop:"1rem"}}>
          {buttonName}
        </Button>
        </Card>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: propTypes.object.isRequired,
  description: propTypes.func.isRequired,
  buttonName: propTypes.string,
};

export default Product;
