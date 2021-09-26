import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import { login } from "../../actions/authAction";
class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.errors && nextProps.errors.length > 0){
            nextProps.errors.forEach((error)=>{
                message.error(error.msg);
            });
        }

        if (
            nextProps &&
            nextProps.auth &&
            nextProps.auth.errors &&
            nextProps.auth.errors.length > 0
          ) {
            console.log("here2");
            nextProps.auth.errors.forEach((error) => {
              message.error(error.msg);
            });
          }

        if(nextProps.isAuthenticated){
            message.success("Thankyou for signing in");
            setTimeout(()=>this.props.history.push("/"),3000);
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        const {email,password} = this.state;
        const user = {  
            email,
            password,
        };
        this.props.login(user);
    }
    render(){
        return (
            <div className="container loginPage">
                <h1 className="large text-primary">
                    Sign In
                </h1>
                <p className="lead"><i className="fas fa-user"></i>Sign In Your Account</p>
                <div className="form">
                    <Input name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form">
                    <Input name="password" type="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.onSubmit}>  {" "}Sign In</button>
                <p className="my-1">Dont Have an Account? <Link to="/register?role=customer">Sign Up</Link></p>
            </div>
        );
    }
   
}

const mapStateToProps = (state) =>({
    isAuthenticated : state.auth.isAuthenticated,
    errors: state.auth.errors,
});

export default connect(mapStateToProps,{login})(withRouter(Login));