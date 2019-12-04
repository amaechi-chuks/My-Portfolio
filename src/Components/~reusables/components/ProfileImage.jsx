import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { heading5, white } from '../variables/index';

const ProfileImage = ({
  name, image, path, email, phoneNumber,
}) => (
  <StyledImage>
    <NavLink to={path}>
      <div>
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNumber}</p>
    </NavLink>
  </StyledImage>
);
ProfileImage.defaultProps = {
  name: '',
};
ProfileImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
};

const StyledImage = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border: 3px solid ${white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.8rem;
    height: 16rem;

    img {
      border-radius: inherit;
      width: inherit;
      height: inherit;
    }
  }

  p {
    width: 90%;
    padding: 0.1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${heading5};
    font-weight: 600;
    color: ${white};
    text-decoration: none;
    font-size: 1rem;
  }
`;

export default ProfileImage;
