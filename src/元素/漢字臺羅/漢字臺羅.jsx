import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent-bluebird-promise';
import Debug from 'debug';
import 後端網址 from '../../頁/後端網址';
import 一個詞 from '../一個詞/一個詞';
import 對齊失敗 from '../對齊失敗/對齊失敗';

var debug = Debug('kip4:漢字臺羅');

export default class 漢字臺羅 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.對齊(this.props);
  }

  對齊(parm)  {
    if (parm.漢字 && parm.臺羅) {
      superagent.get(後端網址.對齊())
        .query({ 查詢腔口: '閩南語', 漢字: parm.漢字, 音標: parm.臺羅 })
        .then(({ body }) => {
          this.setState(body);
          return null;
        })
        .catch((err) => (debug(err)));
    }
  }

  render() {

    let { 失敗, 分詞, 綜合標音 } = this.state;
    let { 臺羅, 漢字 } = this.props;
    let 詞 = null;

    if (!漢字 && !臺羅) {
      //breakline
      詞 = <br/>;
    } else if (失敗 || !漢字 || !臺羅) {
      //fail
      詞 = <對齊失敗 臺羅={臺羅} 漢字={漢字}/>;
    }else if (分詞) {
      //success
      let 分詞陣列 = [];
      let 漢字陣列 = [];
      let 臺羅陣列 = [];

      綜合標音.map(function (標音) {
        分詞陣列 = 分詞陣列.concat(標音.分詞.split(' '));
        漢字陣列 = 漢字陣列.concat(標音.漢字.split(' '));
        臺羅陣列 = 臺羅陣列.concat(標音.臺羅閏號調.replace(/--/g, ' --').split(' '));
      });

      詞 = 分詞陣列.map((分詞, i)=>(
        <一個詞 key={i} 漢字={漢字陣列[i]} 臺羅={臺羅陣列[i]}/>
       ));
      詞 = <div>{詞}</div>;
    }

    return 詞;
  }
}
