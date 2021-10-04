import React from 'react'
import styled from 'styled-components'
import UserProfileBody from "./UserProfileBody";
import UserProfileHead from "./UserProfileHeader";


const Body = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: subpixel-antialiased;
    background-color: #f6f8fd;
    color: #545a77;
    font-family: museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4;
    padding: 47px 0 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 4px rgb(0 0 0 / 30%);
`;

function UserProfilePage(){
  return (
  <Body>
  <UserProfileHead/>
  <UserProfileBody/>
  </Body>
  );
}

export default UserProfilePage;
