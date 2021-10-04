import React, { Component } from "react";
import styled from "styled-components";
import "./style.css";
import Modal from "../../Modal";
import Signup from "../../Signup";
import Button from "../../Button";
import Login from "../../Login";
import { Link } from "react-router-dom";
import fetchURL from "../../Login/fetchURL"
import Logo from "../../Logo"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  height: 60px;
  background-color: white;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const Item = styled.div`
  font-size: 14px;
  padding: 12px 0;
  margin: 0 12px;
  font-weight: 400;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    border-top: 2px solid black;
  }
`;
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: undefined,
      userName:undefined,
      userId:undefined,
      token:undefined
    };
    this.handleShowModalChange = this.handleShowModalChange.bind(this);
    this.getLogInData = this.getLogInData.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.signUp=this.signUp.bind(this);
  }
 
  handleShowModalChange(newShowModal) {
    this.setState({
      showModal: newShowModal,
    });
  }

  closeModal(){
    this.handleShowModalChange(undefined);
  }
  
  getLogInData = (eMail,password)=> {
    console.log(eMail);
    const data={
      email:eMail,
      password:password,
    }    
    console.log(data);
    fetchURL.post('/auth',data)
    .then(response=>{
      this.setState({
      userName:response.data.username,
      userId:response.data.userId,
      token:response.data.token,
    });
    this.handleShowModalChange(undefined);    
    console.log(response)})
    .catch (
      error=>{
        console.log(error); 
        return error;       
      }
    )
  }

/**
 * The signUp function is used for register the user
 * To simply the function, all data has been sent in one form in this version.
 * The user-type has been simplified in this version.  
 * @param {*} eMail 
 * @param {*} password 
 * @param {*} name
 * @param {*} postCode
 */


  signUp = (eMail,password,name,postCode)=> {
    console.log(eMail);
    const data={
      email:eMail,
      password:password,
      username:name,
      postcode:postCode,
      userType:1
    }    
    console.log(data);
    fetchURL.post('/users',data)
    .then(response=>{
      this.setState({
      userName:response.data.username,
      userId:response.data.userId,
      token:response.data.token,
    });
    this.handleShowModalChange(undefined);    
    console.log(response)})
    .catch (
      error=>{
        console.log(error); 
        return error;       
      }
    )
  }




  render() {
    const { showModal } = this.state;
    return (
      <Wrapper>
        <Link to="/">
          <Logo/>
        </Link>

        <Left>
          <Button size="sm" children="Post a task" />

          <Link to="/Categories">
            <Item>Categories</Item>
          </Link>

          <Link to="/BrowseTask">
            <Item>Browse task</Item>
          </Link>

          <Link to="/works">
            <Item>How it works</Item>
          </Link>

        </Left>

        <Right>
          <Item onClick={() => this.handleShowModalChange("signup")}>
            Sign up
          </Item>
          {showModal === "signup" && (
            <Modal title="Join in" onClose={this.closeModal}>
              <Signup signUp={this.signUp}/>
            </Modal>
          )}
          <Item onClick={() => this.handleShowModalChange("login")}>Login</Item>
          {showModal === "login" && (
            <Modal title="Log in" onClose={this.closeModal}>
              <Login logIn={this.getLogInData}/>
            </Modal>
          )}
          <div>{this.state.userName} </div>
          <Button variant="green" children="Become a Tasker" />
          
        </Right>
      </Wrapper>
    );
  }
}



