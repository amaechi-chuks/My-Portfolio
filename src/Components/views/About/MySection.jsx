import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  tabletMaxWidth,
  mobileMaxWidth,
  largeWidth,
  extraLargeWidth,
} from '../../~reusables/variables';

const MySection = ({
  image,
  title,
  shortdeet,
  techlist,
  path,
  details,
}) => (
  <Card>
    <Content>
      <Description>
        <StyledDetails>
          <ProjectTitle>{title}</ProjectTitle>
          <br />
          {details.line1}
          <br />
          <ShortDeet>{shortdeet}</ShortDeet>
          {techlist && (
            <DetailedList>
              {techlist.map((tech, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItem key={i}>
                  <a href={tech.link}>{tech.name}</a>
                </ListItem>
              ))}
            </DetailedList>
          )}
        </StyledDetails>
      </Description>
      <MyImage>
        {path && (
          <NavLink to={path}>
            <img src={image} alt="" />
          </NavLink>
        )}
      </MyImage>
    </Content>
  </Card>
);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-height: 300px;
`;

const Content = styled.div`
  display: flex;
  padding: 0;
  @media (max-width: ${tabletMaxWidth}) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 2rem auto;
    padding-left: 2rem;
  }

  @media (max-width: ${mobileMaxWidth}) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 2rem auto;
    padding-left: 2rem;
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: 1402px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: calc(100vh - 80rem) 0;
    margin: 2rem auto;
    margin-bottom: calc(100vh - 40rem);
  }
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
`;

const StyledDetails = styled.div`
  padding: 5px;
  font-weight: 400;
  word-spacing: 2px;
  line-height: 1.6em;
  @media (min-width: ${extraLargeWidth}) {
    width: 100%;
  }

  @media (max-width: 1402px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 2rem auto;
  }

  @media (max-width: ${largeWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
`;

const ShortDeet = styled.strong`
  display: flex;
  margin: 1rem 0;
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
`;

const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;
`;

const MyImage = styled.div`
  padding: 5px;
  width: 50%;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 10px;
    object-fit: cover;
    margin-left: 16px;
    width: 100%;
    @media (min-width: ${extraLargeWidth}) {
    width: 10%;
  }

  @media (max-width: 1402px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 2rem auto;
  }

  @media (max-width: ${largeWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
  }

  @media (min-width: ${extraLargeWidth}) {
    width: 50%;
  }

  @media (max-width: 1402px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 2rem auto;
  }

  @media (max-width: ${largeWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
`;

const DetailedList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding-left: 1rem;
  position: relative;
  overflow: hidden;
  margin: 5px;
  a {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.3);
    color: #000;
    padding: 4px 8px;
    font-size: 1.5rem;
  }
`;
export default MySection;
