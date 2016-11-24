
import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import 後端網址 from '../後端網址';
import 載入中 from '../../元素/載入中/載入中';

var debug = Debug('kip4:全部資料');

export default class 全部資料 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    superagent.get(後端網址.全部資料())
      .then(({ body }) => (this.setState(body)))
      .catch((err) => (debug(err)));
  }

  render () {
    let { 資料 } = this.state;
    if (資料 == undefined) {
      return (<載入中 />);
    }

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
