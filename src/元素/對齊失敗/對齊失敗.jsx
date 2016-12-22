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
      <div className="ui grid">
        <div className="one wide column">
          <span className="ui icon button" data-tooltip="該行對齊失敗" data-position="top left">
            <i className="warning sign red icon"></i>
        </span>
        </div>
        <div className="fifteen wide column">
          {this.props.臺羅}<br/>
          {this.props.漢字}
        </div>
      </div>
    );
  }
}
