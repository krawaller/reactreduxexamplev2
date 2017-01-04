/*
This is the "sitemap" of our app! 
*/

import React from 'react';
import {Route,IndexRoute} from 'react-router';

import Wrapper from './components/wrapper'
import Home from './components/home'
import Hero from './components/hero'

const routes = (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Home} />
    <Route path="/hero/:name" component={Hero} />
  </Route>
);

export default routes;
