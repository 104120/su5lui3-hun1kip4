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
                <div className='su1sia2'>
                  <table className="ui table">
                    <thead><tr>
                      <th>漢字</th>
                      <th>臺羅</th>
                    </tr></thead>
                    <tbody>
                      <tr><td>這个</td><td>tsit-ê</td></tr>
                      <tr><td>無要緊</td><td>bô-iàu-kín</td></tr>
                      <tr><td>有 要緊</td><td> iàu-kín</td></tr>
                      <tr><td>無法度</td><td>bô-huat-tōo</td></tr>
                      <tr><td>有 法度</td><td>ū huat-tōo</td></tr>
                      <tr><td>掠人</td><td>lia̍h-lâng</td></tr>
                      <tr><td>一个人</td><td>tsi̍t-ê-lâng</td></tr>
                      <tr><td>一個月</td><td>tsi̍t-kòo-gue̍h</td></tr>
                      <tr><td>遮爾</td><td>tsiah-ní</td></tr>
                    </tbody>
                  </table>
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
