import React from 'react';
import styled from 'styled-components';
import ProfileEdit from "../../../components/ProfileEdit";

const BodyContainer = styled.div`
    display: block;
`;
const BodyLeft = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 25%;
`;
const BodyRight = styled.div`
    display: inline-block;
    width: 75%;
`;
const BadgeLabel = styled.div`
    font-size: 11px;
    font-style: italic;
    margin-bottom: 10px;
    text-transform: uppercase;
`;
const PaymentLabel = styled.div`
    margin-bottom: 10px;
    position: relative;
`;
const MobileLabel = styled.div`
    margin-bottom: 10px;
    position: relative;
`;
const SocialMediaLabel = styled.div`
    margin-bottom: 10px;
    position: relative;
`;
const LearnMoreButton = styled.a`
    margin-right: 0;
    line-height: 1.4;
    font-size: 14px;
    padding: 6px 16px;
    text-shadow: 0 1px 2px rgb(0 0 0 / 25%);
    transition: text-shadow .35s cubic-bezier(.615,.19,.305,.91),border .35s cubic-bezier(.615,.19,.305,.91),background-color .35s cubic-bezier(.615,.19,.305,.91);
    white-space: nowrap;
    background-color: #f6f8fd;
    border: 2px solid rgba(41,43,50,.1);
    border-radius: 200px;
    box-sizing: border-box;
    color: #fff;
    color: #008fb4;
    cursor: pointer;
    display: inline-block;
    font-weight: 500;
    letter-spacing: .05em;
    margin: 0;
    padding: 0;
    text-align: center;
    text-shadow: none!important;

`;



export default function UserProfileBody(){
  const userData = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  return (
    <BodyContainer>
      <BodyLeft>
        <div className="badges">BADGES</div>
        <div className="personalInfo">
          <BadgeLabel>ID BADGES</BadgeLabel>
        </div>
        <PaymentLabel>Payment Method</PaymentLabel>
        <MobileLabel>Mobile</MobileLabel>
        <SocialMediaLabel>Facebook</SocialMediaLabel>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </BodyLeft>
      <BodyRight>
        <div className="section">SKILLS</div>
        <div className="skillsDetails">
          I am am Honest, dedicated, independent, self-motivated & good
          ownership spirit. Hard worker and quick learner with a positive
          approach considering aim & direction.
        </div>
      </BodyRight>
    </BodyContainer>
  );
}
