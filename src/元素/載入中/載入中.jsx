
import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';

var debug = Debug('kip4:載入中');

export default class 載入中 extends React.Component {

  render () {
    return (
    //   <div className='main container'>
    //  載入中…
    // </div>
        <div className="ui basic segment">
          <div className="ui active inverted dimmer">
            <div className="ui medium text loader">Loading</div>
          </div>
          <br/><br/><br/><br/><br/><br/>
        </div>
      );
  }
}
