import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import Avatar from '../Avatar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 8px;
  align-items: stretch;
`;

const TaskerInfo = styled.div`
  display: flex;
  -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;
const UserInfo = styled.div`
  a {
    color: rgb(0, 143, 180);
    font-family: museo-bold, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 16px;
    font-weight: initial;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;
const UserRating = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const OfferComment = styled.div`
    background-color: rgb(246, 248, 253);
    border-radius: 4px;
    padding: 8px;
    p {
      color: rgb(41, 43, 50);
    font-family: museo-regular, "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 14px;
    font-weight: initial;
    line-height: 20px;
    letter-spacing: 0.25px;
    overflow-wrap: break-word;
    word-break: break-word;
    text-decoration: initial;
    text-align: initial;
    vertical-align: initial;
    font-style: initial;
    white-space: pre-wrap;
    margin: 0px;
    padding: 0px;
    }
`;

const OfferDetails = ({ offers }) =>{ 

  console.log(offers);
  return (
  <div>
  {
    offers.map((offerItem) => (
      <Container>
        <TaskerInfo>
        <Avatar />
        <UserInfo>
          <a className="user-name">{offerItem.taskerId}</a>
          <UserRating>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </UserRating>
        </UserInfo>
      </TaskerInfo>
      <OfferComment>
        <p>{offerItem.offerComment}</p>
      </OfferComment>
        
      </Container>
    ))
  } 
    
  </div>
  )
}

export default OfferDetails;