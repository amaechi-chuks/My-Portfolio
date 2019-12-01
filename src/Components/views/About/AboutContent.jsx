import React from 'react';

import { Icon } from '@iconify/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import jqueryIcon from '@iconify/icons-logos/jquery';
import expressIcon from '@iconify/icons-logos/express';
import vueIcon from '@iconify/icons-logos/vue';
import ReduxSagaIcon from '@iconify/icons-logos/redux-saga';
import swaggerIcon from '@iconify/icons-logos/swagger';
import githubIcon from '@iconify/icons-logos/github';
import mochaIcon from '@iconify/icons-logos/mocha';
import chaiIcon from '@iconify/icons-logos/chai';
import jestIcon from '@iconify/icons-logos/jest';
import cypressIcon from '@iconify/icons-logos/cypress';

import graphqlIcon from '@iconify/icons-logos/graphql';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import mongodbIcon from '@iconify/icons-logos/mongodb';

import mysqlIcon from '@iconify/icons-logos/mysql';
import gitIcon from '@iconify/icons-logos/git-icon';
import azureIcon from '@iconify/icons-logos/azure';
import herokuIcon from '@iconify/icons-logos/heroku-icon';

import apollostackIcon from '@iconify/icons-logos/apollostack';
import knexIcon from '@iconify/icons-logos/knex';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import netlifyIcon from '@iconify/icons-logos/netlify';

import chuksPhoto from '../../~reusables/assets/images/chuks.jpeg';
import ContentLayout from '../../~reusables/components/ContentLayout';
import MySection from './MySection';

const AboutContent = () => (
  <ContentLayout>
    <MySection
      image={chuksPhoto}
      imh="50"
      title="BIO"
      details={{
        line1: `I am Amaechi Chuks, a software enthusim, an
                adventurer and a total geek.
                All my life I've had a flair for puzzles and this urged me to major in Mathematcis
                at the University of Ibadan Nigeria. My passion for programming was ingnited during my final year
                project when I had to analyse data using "Matlab" and "R", this made me realise that to efficiently solve problems in my 
                field as a mathematician I needed some coding skills.`,
        line2: `Since graduating college I've been up and about in the tech industry. I've lectured people in programming,
                worked and freelanced as an SEO specialist and also as a data analyst.
                Most recently I worked with "Andela" as a Software Engineer and I'm currently 
                running a Full-Stack Web Development and Computer Science program with Lambda School.`,
      }}
      shortdeet="Technologies I work with"
      techlist={[
        { name: <Icon icon={javascriptIcon} width="30" height="30" />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: <Icon icon={nodejsIcon} width="30" height="30" />, link: 'https://nodejs.org/en/' },
        { name: <Icon icon={reactIcon} width="30" height="30" />, link: 'https://reactjs.org' },
        { name: <Icon icon={jqueryIcon} width="30" height="30" />, link: 'https://jquery.com' },
        {
          name: <Icon icon={graphqlIcon} width="30" height="30" />,
          link: 'https://graphql.org',
        },
        { name: <Icon icon={expressIcon} width="30" height="30" />, link: 'https://expressjs.com' },
        { name: <Icon icon={apollostackIcon} width="30" height="30" />, link: 'https://www.apollographql.com/docs/apollo-server/' },
        { name: <Icon icon={postgresqlIcon} width="30" height="30" />, link: 'https://www.postgresql.org' },
        { name: <Icon icon={sequelizeIcon} width="30" height="30" />, link: 'https://sequelize.org' },
        { name: <Icon icon={knexIcon} width="30" height="30" />, link: 'http://knexjs.org/' },
        { name: <Icon icon={mongodbIcon} width="30" height="30" />, link: 'https://www.mongodb.com' },
        { name: <Icon icon={mysqlIcon} width="30" height="30" />, link: 'https://www.mysql.com' },

        { name: <Icon icon={gitIcon} width="30" height="30" />, link: 'https://git-scm.com' },
        { name: <Icon icon={azureIcon} width="30" height="30" />, link: 'https://azure.microsoft.com/en-us/' },
        { name: <Icon icon={herokuIcon} width="30" height="30" />, link: 'https://dashboard.heroku.com' },
        { name: <Icon icon={netlifyIcon} width="30" height="30" />, link: 'https://www.netlify.com/' },
        { name: <Icon icon={vueIcon} width="30" height="30" />, link: 'https://www.vuejs.org/' },
        { name: <Icon icon={ReduxSagaIcon} width="30" height="30" />, link: 'https://redux-saga.js.org/' },
        { name: <Icon icon={swaggerIcon} width="30" height="30" />, link: 'https://swagger.io/' },
        { name: <Icon icon={githubIcon} width="30" height="30" />, link: 'https://github.com/' },
        { name: <Icon icon={mochaIcon} width="30" height="30" />, link: 'https://mochajs.org/' },
        { name: <Icon icon={chaiIcon} width="30" height="30" />, link: 'https://www.chaijs.com/' },
        { name: <Icon icon={jestIcon} width="30" height="30" />, link: 'https://jestjs.io/' },
        { name: <Icon icon={cypressIcon} width="30" height="30" />, link: 'https://cypress.io/' },
      ]}
      path="/"
    />
  </ContentLayout>
);

export default AboutContent;
