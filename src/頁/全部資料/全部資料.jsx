import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';

import Ajax頁面板 from '../Ajax頁面板';
import 後端網址 from '../後端網址';

var debug = Debug('kip4:全部資料');

export default class 全部資料 extends Ajax頁面板 {

  componentWillMount() {
    superagent.get(後端網址.全部資料())
      .then(({ body }) => (this.setState(body)))
      .catch((err) => (debug(err)));
  }

  頁面() {
    let { 資料 } = this.state;
    let hian2si7 = 資料.map((tsit8pit4, i)=>(
      <div key={i}>
        <Link to={'/%E7%9C%8B%E6%9B%B8%E9%9D%A2/' + tsit8pit4.id}>
          {tsit8pit4.文章名} {tsit8pit4.作者} {tsit8pit4.聽拍的人}
        </Link>
      </div>
      ));
    return (
      <div className='main container'>
        {hian2si7}
      </div>
    );
  }
}
