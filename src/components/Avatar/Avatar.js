import React from 'react';
import styled from 'styled-components';

const ProfileImg = styled.img`
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin: 5px;
`;

const Avatar = ({ userAvatar }) => (
  <div>
    <ProfileImg src={"https://www.searchpng.com/download-png/?imageid=8600"} alt={userAvatar} />
  </div>
);

export default Avatar;