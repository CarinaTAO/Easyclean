import React, { Component } from "react";
//import FormInput from "../FormInput/FormInput.js";
import styled from "styled-components";
import Button from "../Button";
import FormItem from "../FormItem";
import Input from "../Input";

const Form =styled.form`
    width:330px;
    padding:0px;
    margin: 0px;
`

const Error = styled.div`
  font-size: 6px;
  margin: 0px;
  padding:0px;
  color: rgb(231, 82, 69);
  letter-spacing: 0.25px;
`;

const SignUpButton=styled(Button)`
  width:100%
`

const validate = (key,data) => {
  const value=data[key];

  switch (key){

    case 'email':{
      if(!value){
        return 'PLease input your Email';
      }
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
      if(!EMAIL_REGEXP.test(value)){
        return "Please input a valid email";
      }
      return '';
    }

    case 'password':{
      if(!value){
        return 'Please input the password';
      }
      return '';
    }
  
    case 'confirmPassword': {
      if (!value) {
        return 'Please input your confirm password';
      }

      if (value !== data.password) {
        return 'Confirm password does not match to password';
      }

      return '';
    }

    case 'name':{
      if(!value){
        return 'Please input the name of user';
      }
      return '';
    }

    case 'postCode':{
      if(!value){
        return 'Please input the post code of user';
      }
      return '';
    }

  default:
    return '';
  }
};



export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        email:'',
        password:'',
        confirmPassword:'',
        name:'',
        postCode:0,
        userType:0,
      },
      error:{},    
    };
  
  this.handleDataChange = this.handleDataChange.bind(this);
  this.handleErrorChange = this.handleErrorChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this); 
}

  handleDataChange(event){
    const {name, value}=event.target;
    this.setState((prevState)=>({
      data:{
        ...prevState.data,
        [name]:value,
      },    
    }),()=>{
      const { data }=this.state;
      const error=validate(name,data);
      this.handleErrorChange(name,error);
    });
  }

  handleErrorChange(key,error){
    this.setState((preState)=>({
      error:{
        ...preState.error,
        [key]:error,
      },
    }));
  }

  /////
  onSubmit(event){
    event.preventDefault();
    this.props.signUp(
      this.state.data.email,
      this.state.data.password,      
      this.state.data.name,
      parseInt(this.state.data.postCode),
      );

  }


  render() {
    // const { onClose } =this.props;
    const { signUp } =this.props;
    const { data, error } =this.state;
    //The solution for our modal is different. 
    return (
      
        <Form onSubmit={this.onSubmit}>
          <FormItem label="Email" htmlFor="signUp-modal-email">
            <Input
              name="email"
              value={data.email}
              onChange={this.handleDataChange}
              error={error.email}
              id ="signUp-modal-email"
            />
            <Error>{error.email}</Error>
          </FormItem>

          <FormItem label="Password" htmlFor="sign-up-modal-password">
            <Input
              name="password"
              value={data.password}
              onChange={this.handleDataChange}
              type="password"
              error={error.password}
              id="sign-up-modal-password"
            />
            <Error>{error.password}</Error>
          </FormItem>

          <FormItem label="Confirm password" htmlFor="sign-up-modal-confirm-password">
            <Input
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={this.handleDataChange}
              type="password"
              error={error.confirmPassword}
              id="sign-up-modal-confirm-password"
            />
            <Error>{error.confirmPassword}</Error>
          </FormItem>

          <FormItem label="Name" htmlFor="signUp-modal-name">
            <Input
              name="name"
              value={data.name}
              onChange={this.handleDataChange}
              error={error.name}
              id="signUp-modal-name"
            />
            <Error>{error.name}</Error>
          </FormItem>

          <FormItem label="Post Code" htmlFor="signUp-modal-postCode">
            <Input
              name="postCode"
              value={data.postCode}
              onChange={this.handleDataChange}
              type="number"
              error={error.postCode}
              id="signUp-modal-postCode"
            />
            <Error>{error.postCode}</Error>
          </FormItem>

            <SignUpButton
              size="md"
              variant="green"
              children="Join Easy Cleaner"
              type="submit"
            />
        </Form>    
    );
  }
}
