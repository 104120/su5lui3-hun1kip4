
import React from 'react';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import './查.css';
import ReactDOM from 'react-dom';
import 輸入欄位 from '../../元素/輸入欄位/輸入欄位';

var debug = Debug('kip4:查');

export default class 查 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      逝數: 15,
      漢字: '逐家 做伙 來𨑨迌 ！',
      臺羅: 'ta̍k-ke tsò-hué lâi-tshit-thô ！',
    };
  }

  調漢字(漢字)
  {
    this.setState({ 漢字 });
    let 這馬逝數 = 漢字.split('\n').length;
    if (這馬逝數 > this.state.逝數)
      this.setState({ 逝數: 這馬逝數 + 10 });
  }

  調臺羅(臺羅)
  {
    this.setState({ 臺羅 });
    let 這馬逝數 = 臺羅.split('\n').length;
    if (這馬逝數 > this.state.逝數)
      this.setState({ 逝數: 這馬逝數 + 10 });
  }

  render () {
    let { 逝數, 漢字, 臺羅 } = this.state;
    return (
      <div className='main container'>
        <div className="ui grid">
          <div className="seven wide column" key='1'>
              <輸入欄位 語句={漢字} 逝數={逝數}
                輸入內容={this.調漢字.bind(this)} />
          </div>
          <div className="nine wide column" key='2'>
              <輸入欄位 語句={臺羅} 逝數={逝數}
                輸入內容={this.調臺羅.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
