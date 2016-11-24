import React from 'react';
import { Link } from 'react-router';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import 後端網址 from '../後端網址';
import 載入中 from '../../元素/載入中/載入中';
import 輸入欄位 from '../../元素/輸入欄位/輸入欄位';

var debug = Debug('kip4:看書面');

export default class 看書面 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    superagent.get(後端網址.看書面(this.props.params.pian1ho7))
      .then(({ body }) => (this.setState(body)))
      .catch((err) => (debug(err)));
  }

  振動(textarea) {
    let { target } = textarea;
    let 總闊 = target.scrollWidth - target.clientWidth;
    let 所在 = target.scrollLeft / 總闊;
    this.setState({ 所在 });
  }

  render() {
    let { 資料 } = this.state;
    if (資料 == undefined) {
      return (<載入中 />);
    }

    let { 逝數, 所在, 原始檔網址, 編號, 文章名, 作者, 漢字, 臺羅 } = 資料;
    return (
      <div className='main container'>
        <form className="ui form">
          <div className="four fields">
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
          </div>
          <div className="ui grid">
            <div className="seven wide column" key='1'>
              <label>臺語漢字</label>
              <輸入欄位 語句={漢字} 逝數={逝數}
                所在={所在} 振動={this.振動.bind(this)}
                袂當改={true}
                輸入內容={(i)=>(i)} />
            </div>
            <div className="nine wide column" key='2'>
              <label>臺羅</label>
              <輸入欄位 語句={臺羅} 逝數={逝數}
                所在={所在} 振動={this.振動.bind(this)}
                袂當改={true}
                輸入內容={(i)=>(i)} />
              </div>
          </div>
        </form>
        <Link to={'/%E6%8B%8D%E6%9B%B8%E9%9D%A2/' + this.props.params.pian1ho7}>修改</Link>
      </div>
    );
  }
}
