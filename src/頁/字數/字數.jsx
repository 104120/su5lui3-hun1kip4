
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
    this.state = {};
    superagent.get(後端網址.算字數())
      .then(({ body }) => (this.setState(body)))
      .catch((err) => (debug(err)));
  }

  render資料() {
    let { 資料 } = this.state;
    let 結果 = 資料.map((一筆, i)=>{
      return (
      <tr key={i}>
          <td>
              {一筆.聽拍的人?一筆.聽拍的人:'(未命名)'}
          </td>
          <td>
              {一筆.漢字} 
          </td>
          <td>
              {一筆.臺羅}
          </td>
        </tr>
        );
    });
    return 結果;
  }

  render () {
    let { 資料 } = this.state;
    if (資料 == undefined) {
      return (<載入中 />);
    }

    return (
      <div className='main container'>
        <table className="ui table">
        <thead>
          <tr>
            <th>聽拍的人</th>
            <th>漢字字數</th>
            <th>臺羅字數</th>
          </tr>
        </thead>
        <tbody>
          {this.render資料()}
        </tbody>
      </table>
      </div>
    );
  }
}
