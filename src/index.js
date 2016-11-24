
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 全部資料 from './頁/全部資料/全部資料';
import 看書面 from './頁/看書面/看書面';
import 拍書面 from './頁/拍書面/拍書面';

import './app.css';

import Debug from 'debug';
Debug.enable('kip4:*');

const root = document.getElementById('app');
let history = browserHistory;

render(
  <Router history={history}>
          <Route path='/' component={網站}>
              <IndexRoute component={全部資料}/>
              <Route path='%E7%9C%8B%E6%9B%B8%E9%9D%A2/:ku' component={看書面}/>
              <Route path='%E6%8B%8D%E6%9B%B8%E9%9D%A2/:ku' component={拍書面}/>
              <Route path='**' component={全部資料}/>
          </Route>
      </Router>,
      root
);
