import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import 後端網址 from '../後端網址';
import 載入中 from '../../元素/載入中/載入中';
import 輸入欄位 from '../../元素/輸入欄位/輸入欄位';
import 漢字臺羅 from '../../元素/漢字臺羅/漢字臺羅';

var debug = Debug('kip4:看書面');

export default class 看書面 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    superagent.get(後端網址.看書面(this.props.params.pian1ho7))
      .then(function ({ body }) {
        let { 資料 } = body;
        this.setState(資料);
      }.bind(this))
      .catch((err) => (debug(err)));
  }

  顯示漢字臺羅() {
    let { 漢字, 臺羅 } = this.state;
    let 漢字陣列 = 漢字.split('\n');
    let 臺羅陣列 = 臺羅.split('\n');
    const 行數 = (漢字陣列.length > 臺羅陣列.length) ? 漢字陣列.length : 臺羅陣列.length;
    
    let 合併 = [];
    for (let i = 0 ; i < 行數 ; i++) {
      合併.push(<漢字臺羅 key={i} 漢字={漢字陣列[i]} 臺羅={臺羅陣列[i]}/>);
    }
    return 合併;
  }

  render() {
    let { id, 逝數, 所在, 原始檔網址, 編號, 文章名, 作者, 啥人改的, 漢字, 臺羅 } = this.state;
    if (文章名 == undefined) {
      return (<載入中 />);
    }

    let 合併 = this.顯示漢字臺羅();

    return (
      <div className='main container'>
        <Link to={'/%E6%8B%8D%E6%9B%B8%E9%9D%A2/' + this.props.params.pian1ho7}>
          <i className="edit icon"></i>修改
        </Link>
        <form className="ui form">
          <div className="five fields">
            <div className="field">
              <label>流水號</label>
              <input type='text' placeholder="流水號" value={id} readOnly='true' disabled='true'/>
            </div>
            <div className="field">
              <label>原始檔</label>
              <a href={後端網址.原始檔案(原始檔網址)}>{原始檔網址.substring(原始檔網址.lastIndexOf('/') + 1)}</a>
            </div>
            <div className="field">
              <label>編號</label>
              <input type='text' placeholder="編號" value={編號} readOnly='true' disabled='true'/>
            </div>
            <div className="field">
             <label>文章名</label>
             <input type='text' placeholder="文章名" value={文章名} readOnly='true' disabled='true'/>
            </div>
            <div className="field">
              <label>作者</label>
              <input type='text' placeholder="作者" value={作者} readOnly='true' disabled='true'/>
            </div>
            <div className="field">
              <label>啥人上尾改的</label>
              <input type='text' value={啥人改的} readOnly='true' disabled='true'/>
            </div>
          </div>
          <div className="ui">
            {合併}
          </div>
        </form>
      </div>
    );
  }
}