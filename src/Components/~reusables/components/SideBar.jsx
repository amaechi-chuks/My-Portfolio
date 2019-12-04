/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProfileImage from './ProfileImage';
import SideNavItem from './SideNavItem';
import { sidebarIcons, sidebarTexts } from '../assets/icons/icons';
import { StyledSidebar } from '../atoms/DashBoardLayoutStyles';
import { MyContext } from '../../../Provider';
import chuks from '../assets/images/chuks.jpeg';

class SidebarContainer extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <StyledSidebar className={context.sidebarOpen ? 'active' : ''}>
            <ProfileImage name="AMAECHI CHUKS" email="amaechichuks101@gmail.com " phoneNumber="+2347068566559" image={chuks} path="/" />
            <div
              className="nav-items"
              role="presentation"
              onClick={context.toggleSidebar}
            >
              <SideNavItem
                text={sidebarTexts.about}
                icon={sidebarIcons.about}
                path="/about"
              />

              <SideNavItem
                text={sidebarTexts.portfolio}
                icon={sidebarIcons.portfolio}
                path="/projects"
              />
            </div>
            <div className="empty-div" />
          </StyledSidebar>
        )}
      </MyContext.Consumer>
    );
  }
}

export default SidebarContainer;
