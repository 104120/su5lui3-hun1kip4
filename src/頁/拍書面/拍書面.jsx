
import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import ReactDOM from 'react-dom';

import Ajax頁面板 from '../Ajax頁面板';
import 輸入欄位 from '../../元素/輸入欄位/輸入欄位';
import './拍書面.css';

var debug = Debug('kip4:拍書面');

export default class 拍書面 extends Ajax頁面板 {

  constructor (props) {
    super(props);
    this.state = {
      逝數: 15,
      所在: 0,
      編號: '',
      文章名: '',
      作者: '',
      漢字: '逐家 做伙 來𨑨迌 ！',
      臺羅: 'ta̍k-ke tsò-hué lâi-tshit-thô ！',
    };
  }

  振動(textarea) {
    let { target } = textarea;
    let 總闊 = target.scrollWidth - target.clientWidth;
    let 所在 = target.scrollLeft / 總闊;
    this.setState({ 所在 });
  }

  調編號(event) {
    this.setState({ 編號: event.target.value });
  }

  調文章名(event) {
    this.setState({ 文章名: event.target.value });
  }

  調作者(event) {
    this.setState({ 作者: event.target.value });
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

  render () {
    let { 逝數, 所在, 編號, 文章名, 作者, 漢字, 臺羅 } = this.state;
    return (
      <div className='main container'>
        <form className="ui form">
          <div className="four fields">
            <div className="field">
              <label>原始檔</label><input type='file' name='原始檔'/>
            </div>
            <div className="field">
              <label>編號</label>
              <input type='text' placeholder="編號" value={編號} onChange={this.調編號.bind(this)} name='編號'/>
            </div>
            <div className="field">
             <label>文章名</label>
             <input type='text' placeholder="文章名" value={文章名} onChange={this.調文章名.bind(this)} name='文章名'/>
            </div>
            <div className="field">
              <label>作者</label>
              <input type='text' placeholder="作者" value={作者} onChange={this.調作者.bind(this)} name='作者'/>
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
          <div className="ui submit button">送出</div>
        </form>
      </div>
    );
  }
}
