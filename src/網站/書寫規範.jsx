import React from 'react';
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    'min-width':'50%',
    'min-height':'90%',
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
                <Tab>音標</Tab>
                <Tab>斷詞</Tab>
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
                <div className='ui list'>
                  <div className='item'>這个  tsit-ê</div>
                  <div className='item'>無要緊  bô-iàu-kín</div>
                  <div className='item'>有 要緊  ū iàu-kín</div>
                  <div className='item'>無法度  bô-huat-tōo</div>
                  <div className='item'>有 法度  ū huat-tōo</div>
                  <div className='item'>掠人  lia̍h-lâng</div>
                  <div className='item'>一个人  tsi̍t-ê-lâng</div>
                  <div className='item'>一個月  tsi̍t-kòo-gue̍h</div>
                  <div className='item'>遮爾  tsiah-ní</div>
                </div>
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
