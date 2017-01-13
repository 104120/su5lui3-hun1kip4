
import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';

var debug = Debug('kip4:整篇文章對齊狀態');

export default class 整篇文章對齊狀態 extends React.Component {

  render () {
    // let { 0:無對齊數量,  1:全部詞分詞, 2:全部字分詞 } = this.props.對齊狀態;
    let [無對齊數量,  全部詞分詞, 全部字分詞] = this.props.對齊狀態;
    if (無對齊數量 != 0) {
      return (
        <div>
          <i className="warning sign icon pink fitted"></i>{無對齊數量}
        </div>
      );
    }

    // if (全部字分詞.length != 0) {
    //   return (
    //     <div>
    //       <i className="warning icon red"></i>{全部字分詞.length}
    //   </div>
    //   );
    // }

    // if (全部詞分詞.length != 0) {
    //   return (
    //     <div>
    //       <i className="warning icon blue"></i>{全部詞分詞.length}
    //   </div>
    //   );
    // }

    return (
      <div>
          <i className="checkmark icon green"></i>
      </div>
    );
  }
}
