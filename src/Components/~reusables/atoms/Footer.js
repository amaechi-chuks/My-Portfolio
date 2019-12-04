import styled from 'styled-components';
import {
  white,
  mobileMaxWidth,
  tabletMaxWidth,
} from '../variables';

export const StyledFooter = styled.footer`
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
    display: none;
    width: 100%;
  }
`;
export const SocialContact = styled.div`
 #socials {
  list-style: none;
  padding: 25px 5px 0 5px;
}

 #socials li {
  display: inline-block;
  margin: 0 2px;
  position: relative;
  border: 1px solid #111;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: .5s ease-in-out;
}

 #socials li:hover {
  border: 1px solid #000;
  background: black;
  color: black;
  cursor: pointer;
}


 #socials li a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: .7em;
}
`;

export const FooterText = styled.div`
  font-size: 18px;
 font-weight: 500
`;
export const Text = styled.div`
margin: 0 0 10px 0;
background: red;
`;
