import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 1003;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    max-width: 500px;
    height: auto;
    min-height: 50px;
    max-height: 90%;
    width: {props.width};
    animation: 0.4s ease 0s 1 normal none running slideIn;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;
    padding: 10px 20px;
    flex-grow: 1;
    div {
      padding: 0px;
      -webkit-box-align: center;
      align-items: center;
      min-height: 10px;
      position: relative;
      text-align: center;
      font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-size: 18px;
      font-weight: initial;
      line-height: 24px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 0;
    animation: 0.8s ease 0s 1 normal none running ehAxHE;
`;

const CloseBtn = styled.svg`
    position: absolute;
    right: 18px;
    top: 15px;
    cursor: pointer;
    fill: rgb(187, 194, 220);
    width: 20px;
    height: 20px;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ModalContainer>
        <ModalContent Width={ () => this.props.type !== "logIn" ? "100%" : "auto"}>
          <div>{this.props.title}</div>
          <Content>
            {this.props.children}
          </Content>
          <CloseBtn className="btn-close" onClick={this.props.onClose}>
            <path d="M13.17 12l6.41-6.42a.82.82 0 00-1.16-1.16L12 10.83 5.58 4.42a.82.82 0 00-1.16 
            1.16L10.83 12l-6.41 6.42a.8.8 0 000 1.16.8.8 0 001.16 0L12 13.17l6.42 6.41a.8.8 0 001.16 
            0 .8.8 0 000-1.16z" />
          </CloseBtn>
        </ModalContent>
      </ModalContainer>)
  }
}

export default Modal;




