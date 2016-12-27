import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 後端網址 from '../../頁/後端網址';

var debug = Debug('kip4:一個詞');

export default class 一個詞 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.檢查是否收錄();
  }

  檢查是否收錄() {
    superagent.get(後端網址.斷詞狀態())
      .query({ 漢字: this.props.漢字, 臺羅: this.props.臺羅 })
      .then(({ body }) => {
        this.setState(body);
      });
  }

  render() {
    let { 失敗, 成功 } = this.state;
    let 詞顏色 = null;

    if (失敗 && 失敗 === '字') {
      詞顏色 = 'text red';
    } else if (失敗 && 失敗 === '詞') {
      詞顏色 = 'text blue';
    } else if (成功) {
      詞顏色 = '';
    } else {
      詞顏色 = '';
    }

    return (
      <ruby className={'taiLo ' + 詞顏色}>
        {this.props.漢字}
        <rt>{this.props.臺羅}</rt>
      </ruby>
    );
  }
}
