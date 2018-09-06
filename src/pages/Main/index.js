import React, { Fragment } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

export default () => (
  <Fragment>
    <SideBar />
    <div id="main">
      <Header />
    </div>
  </Fragment>
);
