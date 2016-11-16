
import React from 'react';
import Debug from 'debug';

var debug = Debug('kip4:輸入欄位');

export default class 輸入欄位 extends React.Component {

  componentWillMount() {
    this.timer = setInterval(this.定期.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  定期() {
    this.props.輸入內容(this.refs.語句.value);
  }

  render () {
    let { 語句, 逝數 } = this.props;
    return (
       <textarea ref='語句' defaultValue={語句} rows={ 逝數}/>
    );
  }
}
