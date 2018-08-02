/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import SubmitPage from 'containers/SubmitPage/Loadable';
import HomePagePriya from 'containers/HomePagePriya/Loadable';
import SubmitPageGenerator from 'containers/SubmitPageGenerator';

import Header from 'components/Header';
import H1 from 'components/H1';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <AppWrapper>
        <Header />
        <H1>Dovenmuehle String Extravaganza</H1>
        <Switch>
          <Route exact path="/" component={HomePagePriya} />
          <Route exact path="/submit" component={SubmitPageGenerator} />
        </Switch>
      </AppWrapper>
    </div>
  );
}
