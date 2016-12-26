import React from 'react';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default class 返回提醒 extends React.Component  {
  constructor(props) {
    super(props);
  }

  customStyles() {
    return {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
      },
    };
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal.bind(this)}
          style={this.customStyles()}
          contentLabel="返回提醒"
        >
          <div className="ui clearing basic segment">
            <h2 className="ui left floated header">提醒</h2>
            <button className="ui basic icon right floated button" onClick={this.props.closeModal.bind(this)}>
              <i className="remove icon"></i>
            </button>
          </div>
          <div className="ui basic segment">
            <p>文章被修改過，是否仍要離開？</p>
            <button className="ui basic button" onClick={this.props.closeModal.bind(this)}>繼續改</button>
            <button className="ui green button" onClick={this.props.返回.bind(this)}>好，離開</button>
          </div>
        </Modal>
      </div>
    );
  }
}
