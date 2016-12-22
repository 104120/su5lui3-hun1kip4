import React from 'react';
import ReactDOM from 'react-dom';
import Debug from 'debug';

var debug = Debug('kip4:對齊失敗');

export default class 對齊失敗 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="ui divided items">
          <div className="item">
          
            <div className="ui image">
                <i className="warning sign icon large pink fitted"></i>
            </div>
            
            <div className="content">
              <div className="header">
                <p>對齊失敗</p>
              </div>
              <div className="description">
                <p>{this.props.臺羅}</p>
                <p>{this.props.漢字}</p>
              </div>
            </div>

          </div>
      </div>
    );
  }
}
