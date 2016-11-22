import React from 'react';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 斷詞原則 from '../元素/斷詞原則/斷詞原則';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'min-width': '50%',
    'min-height': '90%',
  },
};

export default class 書寫規範 extends React.Component {

  render() {
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal.bind(this)}
          style={customStyles} >

          <h2 ref="subtitle">書寫規範</h2>
            <Tabs
              onSelect={this.handleSelect}
            >
              <TabList>
                <Tab>漢字</Tab>
                <Tab>臺羅</Tab>
                <Tab>斷詞原則</Tab>
             </TabList>
              <TabPanel>
                <ul>
                <li>一句一逝</li>
                <li>逐段中央空一逝</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                <li>數字調佮閏號調攏會使</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <斷詞原則 />
              </TabPanel>
            </Tabs>
          <button
            onClick={this.props.closeModal.bind(this)}
            className="ui button"
            style={{ float: 'right' }}>好呦
            </button>
        </Modal>
    );
  }
}
