/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { StyledFooter, FooterText, SocialContact } from '../atoms/Footer';

const Footer = () => (
  <StyledFooter>
    <FooterText>
      <SocialContact>
        <ul id="socials">
          <li><a href="https://codepen.io/amaechi-chuks/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen icons" /></a></li>
          <li><a href="https://twitter.com/chuks022" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter icons" /></a></li>
          <li><a href="https://www.linkedin.com/in/chuks-amaechi-1870a2156/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin icons" /></a></li>
          <li><a href="https://github.com/amaechi-chuks" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icons" /></a></li>
          <li><a href="https://medium.com/@amaechichuks2000" target="_blank" rel="noopener noreferrer"><i className=" fa fa-medium icons" /></a></li>
        </ul>
      </SocialContact>
      ©
      {' '}
      Copyright
      {' '}
      {new Date().getFullYear()}
      {' '}
        Amaechi Chuks
    </FooterText>
  </StyledFooter>
);

export default Footer;
