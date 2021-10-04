import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import fetchURL from './fetchURL';
import Modal from '../Modal';

const LogInForm =styled.form`
    width:330px;
    padding:0px;
    margin: 0px;
`
const FormFieldContainer=styled.div`
    overflow: hidden auto;
    color: rgb(41, 43, 50);
    padding: 0px;
    margin:0px;
`
const Label=styled.label`
    display: block;
    left:10px;
    text-align:left;
    color: rgb(41, 43, 50);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 14px;
    font-weight: initial;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom: 8px;
`
const TextInputContainer=styled.div`
    position: relative;
    width: 100%;
    padding:0px;
    margin:0px;
`
const TextInputBox=styled.input`
    box-shadow: none;
    animation: 0s ease 0s 1 normal none running none;
    margin: 0px;
    padding:0px;
    box-sizing: border-box;
    appearance: none;
    width: 100%;
    color: rgb(41, 43, 50);
    background-color: rgb(255, 255, 255);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 14px;
    font-weight: initial;
    line-height: 20px;
    letter-spacing: 0.25px;
    border-radius: 4px;
    min-height: 48px;
    border-color: rgb(187, 194, 220);
    border-width: 1px;
    border-style: solid;
`
const ForgetPassWordContainer=styled.div`
    box-sizing: border-box;
    display: flex;
    flex: row;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    justify-content:flex-end ;
    margin: 0px 0px 20px 0px;
    padding: 0px 0px 20px 0px;
    border-color: rgb(41, 43, 50);
`
const ForgetPassWordButton=styled.button`
    margin: 0px;
    padding: 0px 0px 0px 0px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: rgb(0, 143, 180);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-decoration: none;
    right:0px;
`
const SubmitButton=styled.button`
    border-radius: 160px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
    margin: 0px;
    border-color: rgba(0, 0, 0, 0);
    border-width: 2px;
    border-style: solid;
    color: rgb(255, 255, 255);
    padding: 8px 16px;
    font-family: museo-bold, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
    width: 100%;
    background-color: rgb(125, 179, 67);
`;
const WrongLogIn=styled.div`
    text-align:left；
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    color:red;
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
    eMail:"",
    password:"",
    failInfo:"",
    showModal:"",
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.closeModal=this.closeModal.bind(this);    
  };
  

  // getLogInData=this.props.getLogInData;

  onEmailChange(e){  
    e.preventDefault();
    this.setState({
      eMail:e.target.value
    })}

  onPasswordChange(e){  
    e.preventDefault();
    this.setState({
      password:e.target.value
  })} 

  onSubmit(e){
    e.preventDefault();
    const errorInfo=this.props.logIn(this.state.eMail,this.state.password);
      this.setState({
      showModal:"loginFail"
    })
  }

  closeModal(e){
      this.setState({
      showModal:""
    })
  }

    
        
  render() {
    return (
          <LogInForm onSubmit={this.onSubmit} >
            <FormFieldContainer>
              <Label>Email</Label>
                <TextInputContainer>
                  <TextInputBox name="email" value={this.state.eMail} onChange={this.onEmailChange}  />
                </TextInputContainer>              
            </FormFieldContainer> 

            <FormFieldContainer>
              <Label>Password</Label>
                <TextInputContainer>
                  <TextInputBox name="password" value={this.state.password} onChange={this.onPasswordChange} />
              </TextInputContainer>              
            </FormFieldContainer> 

            <ForgetPassWordContainer>
              <ForgetPassWordButton>
                Forgot Password?
              </ForgetPassWordButton>              
            </ForgetPassWordContainer>
            <SubmitButton type="submit">
              Log in
            </SubmitButton>
            {this.state.showModal === "loginFail" && (
              <Modal title="Log in Failed" onClose={this.closeModal}>
                The account or password is not correct, Please Retry.    
              </Modal>
            )}

          </LogInForm>   


    )
  }
}
