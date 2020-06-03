import * as React from 'react';

import styled from 'styled-components';
import { Stylable } from '../types';
import { NavLink } from 'react-router-dom';

interface MenuProps extends Stylable {
  openClass: string;
}

const BaseMenu = ({ openClass: activeClass, className }: MenuProps) => {
  return (
    <div className={`${className} Menu ${activeClass}`} id="menu">
      <div className="pure-menu">
        <a className="pure-menu-heading" href="#">
          Hacker News
        </a>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <NavLink activeClassName="selected" className="pure-menu-link" to="/top-ten">
              Top Ten
            </NavLink>
          </li>
          <li className="pure-menu-item">
            <NavLink activeClassName="selected" className="pure-menu-link" to="/first-ten">
              First Top Ten
            </NavLink>
          </li>
          <li className="pure-menu-item">
            <NavLink activeClassName="selected" className="pure-menu-link" to="/info">
              Info
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Menu = styled(BaseMenu)`
  .selected {
    background: #444;
  }
`;
