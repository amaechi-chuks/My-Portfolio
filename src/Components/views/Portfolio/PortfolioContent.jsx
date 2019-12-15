import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import expressIcon from '@iconify/icons-logos/express';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import gitIcon from '@iconify/icons-logos/git-icon';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import knexIcon from '@iconify/icons-logos/knex';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import netlifyIcon from '@iconify/icons-logos/netlify';
import reduxIcon from '@iconify/icons-logos/redux';
import postmanIcon from '@iconify/icons-logos/postman';
import pivotaltrackerIcon from '@iconify/icons-logos/pivotal-tracker';
import swaggerIcon from '@iconify/icons-logos/swagger';
import githubIcon from '@iconify/icons-logos/github';
import mochaIcon from '@iconify/icons-logos/mocha';
import chaiIcon from '@iconify/icons-logos/chai';
import CardItem from './CardItem';
import AuthorsHaven from '../../~reusables/assets/images/authorsHaven.png';
import FacialRecognitionApp from '../../~reusables/assets/images/faceApp.png';
import Politico from '../../~reusables/assets/images/politico.png';
import Weconnect from '../../~reusables/assets/images/weconnect.png';
import Divider from '../../~reusables/atoms/Divider';
import ContentLayout from '../../~reusables/components/ContentLayout';

const PortfolioContent = () => (
  <ContentLayout>
    <ProjectList>
      <ListItem>
        <CardItem
          image={AuthorsHaven}
          title="Author's Haven"
          details="This is a Medium clone application for reseachers. Authors Haven is a home for brillant minds to make their contibutions to the world and profer solutions."
          shortdeet="Technologies"
          techlist={[
            {
              name: <Icon icon={sequelizeIcon} width="30" height="30" />,
              link: 'https://www.sequelize.org',
            },
            {
              name: <Icon icon={javascriptIcon} width="30" height="30" />,
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
              name: <Icon icon={nodejsIcon} width="30" height="30" />,
              link: 'https://www.nodejs.com/',
            },
            {
              name: <Icon icon={reactIcon} width="30" height="30" />,
              link: 'https://reactjs.org',
            },
            {
              name: <Icon icon={reduxIcon} width="30" height="30" />,
              link: 'https://www.redux.com/',
            },
            {
              name: <Icon icon={expressIcon} width="30" height="30" />,
              link: 'https://expressjs.com',
            },
            {
              name: <Icon icon={netlifyIcon} width="30" height="30" />,
              link: 'https://www.netlify.com/',
            },
            {
              name: <Icon icon={gitIcon} width="30" height="30" />,
              link: 'https://git-scm.com',
            },
            {
              name: <Icon icon={herokuIcon} width="30" height="30" />,
              link: 'https://dashboard.heroku.com',
            },
            { name: 'Jwt', link: 'https://jwt.io' },
            { name: 'node mailer', link: 'https://nodemailer.com/about/' },
            {
              name: <Icon icon={githubIcon} width="30" height="30" />,
              link: 'https://github.com/',
            },
            {
              name: <Icon icon={pivotaltrackerIcon} width="30" height="30" />,
              link: 'https://pivotaltracker.com/',
            },

            {
              name: <Icon icon={postmanIcon} width="30" height="30" />,
              link: 'https://www.getpostman.com/',
            },
            {
              name: <Icon icon={swaggerIcon} width="30" height="30" />,
              link: 'https://swagger.io/',
            },
          ]}
          path="https://develop--hermes-ah.netlify.com/"
        />
        <Divider />
        <CardItem
          image={Politico}
          title="Politico"
          details={`Politico is a platform that enables citizens to give their mandate to politicians running different government offices while building
          trust in the process through transparency`}
          shortdeet="Technologies"
          techlist={[
            {
              name: <Icon icon={javascriptIcon} width="30" height="30" />,
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
              name: <Icon icon={nodejsIcon} width="30" height="30" />,
              link: 'https://nodejs.org/en/',
            },
            {
              name: <Icon icon={reactIcon} width="30" height="30" />,
              link: 'https://reactjs.org',
            },
            {
              name: <Icon icon={expressIcon} width="30" height="30" />,
              link: 'https://expressjs.com',
            },
            {
              name: <Icon icon={postgresqlIcon} width="30" height="30" />,
              link: 'https://www.postgresql.org',
            },
            {
              name: <Icon icon={netlifyIcon} width="30" height="30" />,
              link: 'https://www.netlify.com/',
            },

            {
              name: <Icon icon={gitIcon} width="30" height="30" />,
              link: 'https://git-scm.com',
            },

            {
              name: <Icon icon={herokuIcon} width="30" height="30" />,
              link: 'https://dashboard.heroku.com',
            },
            { name: 'Jwt', link: 'https://jwt.io' },
            {
              name: <Icon icon={githubIcon} width="30" height="30" />,
              link: 'https://github.com/',
            },
            {
              name: <Icon icon={mochaIcon} width="30" height="30" />,
              link: 'https://mochajs.org/',
            },
            {
              name: <Icon icon={chaiIcon} width="30" height="30" />,
              link: 'https://www.chaijs.com/',
            },
            {
              name: <Icon icon={pivotaltrackerIcon} width="30" height="30" />,
              link: 'https://pivotaltracker.com/',
            },

            {
              name: <Icon icon={postmanIcon} width="30" height="30" />,
              link: 'https://www.getpostman.com/',
            },
            {
              name: <Icon icon={swaggerIcon} width="30" height="30" />,
              link: 'https://swagger.io/',
            },
          ]}
          path="https://keen-murdock-6b52d2.netlify.com/"
        />
        <Divider />
        <CardItem
          image={FacialRecognitionApp}
          title="Face Recognition"
          details="Face recognition was designed to match users image based on the picture they upload"
          shortdeet="Technologies"
          techlist={[
            {
              name: <Icon icon={herokuIcon} width="30" height="30" />,
              link: 'https://dashboard.heroku.com',
            },
            {
              name: <Icon icon={reactIcon} width="30" height="30" />,
              link: 'https://reactjs.org',
            },
            {
              name: <Icon icon={gitIcon} width="30" height="30" />,
              link: 'https://git-scm.com',
            },
            {
              name: <Icon icon={reduxIcon} width="30" height="30" />,
              link: 'https://www.redux.com/',
            },
            {
              name: <Icon icon={knexIcon} width="30" height="30" />, link: 'http://knexjs.org/',
            },
            {
              name: <Icon icon={expressIcon} width="30" height="30" />,
              link: 'https://expressjs.com',
            },
            {
              name: <Icon icon={postgresqlIcon} width="30" height="30" />,
              link: 'https://www.postgresql.org',
            },
            {
              name: <Icon icon={javascriptIcon} width="30" height="30" />,
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
              name: <Icon icon={nodejsIcon} width="30" height="30" />,
              link: 'https://nodejs.org/en/',
            },
          ]}
          path="https://face-recognition-ap.herokuapp.com/"
        />
        <Divider style={{ border: 'white', background: 'transparent' }} />
      </ListItem>
    </ProjectList>
  </ContentLayout>
);

const ProjectList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: block;
  margin: 0;
  padding-left: 2rem;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 568px) {
    &:first-child {
      padding-top: 0;
      line-height: 1.5;
      margin-top: 10px;
    }
  }
`;

export default PortfolioContent;
