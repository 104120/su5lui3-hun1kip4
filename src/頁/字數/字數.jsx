
import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import 後端網址 from '../後端網址';
import 載入中 from '../../元素/載入中/載入中';

var debug = Debug('kip4:字數');

export default class 字數 extends React.Component  {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render () {
    let {文章名} = this.state;
    if (文章名 == undefined) {
      return (<載入中 />);
    }

    return (
      <div className='main container'>
        sui2
      </div>
    );
  }
}
