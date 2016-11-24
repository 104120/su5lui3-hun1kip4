
import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';

var debug = Debug('kip4:Ajax頁面板');

export default class Ajax頁面板 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    let { 資料 } = this.state;
    if (資料 == undefined)
    {
      return (
        <div className='main container'>
       載入中…
      </div>
      );
    }

    return this.頁面();
  }
}
