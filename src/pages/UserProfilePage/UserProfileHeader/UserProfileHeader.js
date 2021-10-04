import React from "react";
import styled from "styled-components";
import background from "../../../assets/images/slide2.jpg";
import ProfileEdit from "../../../components/ProfileEdit";
import api from "../../../api/fetchDetails";

const HeaderContainer = styled.div`
  position: relative;
  margin: 0 16px;
  padding-bottom: 15px;
`;
const Background = styled.div`
  background-image: url(${background});
  background-position: 50% 50%;
  left: 0;
  margin: 0 -20px;
  width: auto;
  background-color: #bbc2dc;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  height: 200px;
  margin: 0 -20px;
  position: relative;
  width: auto;
  display: block;
`;

const Logo = styled.div`
  position: absolute;
  left: 5px;
  top: 90px;
  border-radius: 50%;
  display: inline-block;
  font-size: 16px;
  > img {
    border: 4px solid #fff;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    width: 128px;
    aspect-ratio: auto 128 / 128;
    height: 128px;
  }
`;
const RequestButton = styled.div`
  top: 150px;
  position: absolute;
  right: 20px;
  margin-bottom: 15px;
  line-height: 1.4;
  font-size: 16px;
  letter-spacing: 0.2px;
  padding: 8px 16px;
  text-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  background-color: #7db343;
  border: 2px solid rgba(41, 43, 50, 0.1);
  border-radius: 200px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  margin: 0;
  text-align: center;
  transition: text-shadow 0.35s cubic-bezier(0.615, 0.19, 0.305, 0.91),
    border 0.35s cubic-bezier(0.615, 0.19, 0.305, 0.91);
  white-space: nowrap;
`;
const NameTageLine = styled.div`
  margin-top: 30px;
`;
const InforContainer = styled.div``;

export default class UserProfileHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      mobile: "",
      password: "",
      confirmedPassword: "",
      postcode: "",
      description: "",
      passwordError: "",
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate = () => {
    api
      .get("users/60dfe84827885d36ca9c8255")
        .then((response) => {
        const {
          username,
          email,
          password,
          confirmedPassword,
          mobile,
          description,
          postcode,
        } = response.data;
        this.setState({
          username,
          email,
          postcode,
          mobile,
          password,
          confirmedPassword,
          description,
        });
    });
  };
  render() {
    return (
      <HeaderContainer>
        <Background>
          <Logo>
            <img src="https://eu7cmie.cloudimg.io/v7/https://airtasker-page-assets.s3.amazonaws.com/runner/images/person-1.png?width=64&height=64"></img>
          </Logo>
        </Background>
        <RequestButton>Request A Quote</RequestButton>
        <NameTageLine>
          <ProfileEdit handleUpdate={this.handleUpdate} />
        </NameTageLine>
        <NameTageLine>
          <div className="name">{this.state.username}</div>
        </NameTageLine>

        <div className="infoContainer">
          <div className="lastOnline">
            <span>Last online 24 mins ago</span>
          </div>
          <div className="memberSince">
            <span>Member since 14th Jun 2018</span>
          </div>
          <div className="email">
            <span>Email: {this.state.email}</span>
          </div>
          <div className="mobile">
            <span>Mobile: {this.state.mobile}</span>
          </div>
          <div className="postcode">
            <span>Postcode: {this.state.postcode}</span>
          </div>
          <div className="description">
            <span>Description: {this.state.description}</span>
          </div>
        </div>
      </HeaderContainer>
    );
  }
}
