import * as React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, customTheme } from './styles';
import { TopTen } from './components/top-ten';
import { Menu } from './components/menu';
import { Info } from './components/info';
import { FirstTen } from './components/first-ten';
import { SimpleForm } from './components/simple-form';
import { FormikForm } from './components/formik-form';

export const App: React.FC<any> = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const openClass = open ? 'active' : '';
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={customTheme}>
        <div id="layout" className={openClass}>
          <a
            className={`menu-link ${openClass}`}
            onClick={handleClick}
            data-testid="menu-link"
          >
            <span></span>
          </a>
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/formik-form" />
                </Route>
                <Route exact path="/formik-form">
                  <FormikForm />
                </Route>
                <Route exact path="/simple-form">
                  <SimpleForm />
                </Route>
                <Route path="/top-ten">
                  <TopTen />
                </Route>
                <Route path="/first-ten">
                  <FirstTen />
                </Route>
                <Route path="/info">
                  <Info></Info>
                </Route>
              </Switch>
            </div>
            <Menu openClass={openClass} />
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
};
App.displayName = 'App';
