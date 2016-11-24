
import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import 後端網址 from '../後端網址';
import 載入中 from '../../元素/載入中/載入中';
import 輸入欄位 from '../../元素/輸入欄位/輸入欄位';

var debug = Debug('kip4:拍書面');

export default class 拍書面 extends React.Component  {

  constructor (props) {
    super(props);
    this.state = {
      逝數: 15,
      所在: 0,
    };
    superagent.get(後端網址.看書面(this.props.params.pian1ho7))
      .then(function ({ body }) {
        let { 資料 } = body;
        let { 漢字, 臺羅 } = 資料;
        let 漢字逝數 = 漢字.split('\n').length;
        if (漢字逝數 > this.state.逝數)
          資料.逝數 = 漢字逝數 + 10;
        let 臺羅逝數 = 臺羅.split('\n').length;
        if (臺羅逝數 > this.state.逝數)
          資料.逝數 = 臺羅逝數 + 10;
        this.setState(資料);
      }.bind(this))
      .catch((err) => (debug(err)));
  }

  振動(textarea) {
    let { target } = textarea;
    let 總闊 = target.scrollWidth - target.clientWidth;
    let 所在 = target.scrollLeft / 總闊;
    this.setState({ 所在 });
  }

  調漢字(漢字) {
    this.setState({ 漢字 });
    let 這馬逝數 = 漢字.split('\n').length;
    if (這馬逝數 > this.state.逝數)
      this.setState({ 逝數: 這馬逝數 + 10 });
  }

  調臺羅(臺羅) {
    this.setState({ 臺羅 });
    let 這馬逝數 = 臺羅.split('\n').length;
    if (這馬逝數 > this.state.逝數)
      this.setState({ 逝數: 這馬逝數 + 10 });
  }

  送出() {
    let { 漢字, 臺羅 } = this.state;
    superagent.post(後端網址.看書面(this.props.params.pian1ho7))
      .withCredentials()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-CSRFToken', this.props.csrftoken)
      .send({ 漢字, 臺羅 })
      .then((body)=>(alert('存檔好矣，無問題～～')))
      .catch(res => {
        window.open(this.props.後端網址 + 'accounts/facebook/login', '_blank');
      });
  }

  render () {
    let { id, 逝數, 所在, 原始檔網址, 編號, 文章名, 作者, 漢字, 臺羅 } = this.state;
    if (文章名 == undefined) {
      return (<載入中 />);
    }

    return (
      <div className='main container'>
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
          </div>
          <div className="ui grid">
            <div className="seven wide column" key='1'>
              <label>臺語漢字</label>
              <輸入欄位 語句={漢字} 逝數={逝數}
                所在={所在} 振動={this.振動.bind(this)}
                輸入內容={this.調漢字.bind(this)} />
            </div>
            <div className="nine wide column" key='2'>
              <label>臺羅</label>
              <輸入欄位 語句={臺羅} 逝數={逝數}
                所在={所在} 振動={this.振動.bind(this)}
                輸入內容={this.調臺羅.bind(this)} />
            </div>
          </div>
          <div className="ui submit button" onClick={this.送出.bind(this)}>存檔</div>
        </form>
      </div>
    );
  }
}
