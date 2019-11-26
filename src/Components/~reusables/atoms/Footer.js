import styled from 'styled-components';
import {
  white,
  mobileMaxWidth,
  tabletMaxWidth,
} from '../variables';

export const StyledFooter = styled.footer`
  height: 50px;
  color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: fixed;
  bottom: 0;
  height: 8rem;
  width: 100%;
  > * {
    color: #444;
  }
  a {
    color: #444;
    text-decoration: underline;
  }

  @media (max-width: ${tabletMaxWidth}) {
    display: flex;
  }

  @media (max-width: ${mobileMaxWidth}) {
    display: flex;
    width: 100%;
  }
`;
export const SocialContact = styled.div`
 #socials {
  list-style: none;
  padding: 5px !important;
  margin: 10px -7px !important;
}

 #socials li {
  display: inline-block;
  margin: 0 2px !important;
  position: relative;
  border: 1px solid #111;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: .5s ease-in-out;
}

 #socials li:hover {
  border: 1px solid #000;
  background: #fff;
  color: #fff;
}


 #socials li a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: .7em !important;
}
`;

export const FooterText = styled.div`
  font-size: 18px;
 font-weight: 500
`;
