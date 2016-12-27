import React from 'react';
import Debug from 'debug';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      overflow: 'visible',
    },
};

const headerStyle = {
  marginBottom: '-1rem',
};

const contentStyle = {
  marginTop: '0',
};

const closeStyle = {
  boxShadow: 'none',
  marginTop: '-0.5rem',
  marginRight: '-0.7rem',
};

export default class 返回提醒 extends React.Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal.bind(this)}
          style={customStyles}
          contentLabel="返回提醒"
        >
          <div className="ui clearing basic segment" style={headerStyle}>
            <h3 className="ui left floated header">提醒</h3>
            <button className="ui basic icon right floated button"
              onClick={this.props.closeModal.bind(this)}
              style={closeStyle}
            >
              <i className="remove icon"></i>
            </button>
          </div>
          <div className="ui clearing basic segment" style={contentStyle}>
            <p>文章被修改過，是否仍要離開？</p>
            <button className="ui basic button" onClick={this.props.closeModal.bind(this)}>繼續改</button>
            <button className="ui right floated green button" onClick={this.props.返回.bind(this)}>好，離開</button>
          </div>
        </Modal>
      </div>
    );
  }
}
