
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 網站 from './網站/網站';
import 全部資料 from './頁/全部資料/全部資料';
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
          //'%E8%AC%9B' == '講'
              <Route path='%E8%AC%9B(/:ku)' component={拍書面}/>
              <Route path='%E8%AC%9B' component={拍書面}/>
              <Route path='**/:ku' component={拍書面}/>
          </Route>
      </Router>,
      root
);
