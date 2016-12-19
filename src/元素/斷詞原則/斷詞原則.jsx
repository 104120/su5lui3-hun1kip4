import React from 'react';

export default class 斷詞原則 extends React.Component {

  render() {
    return (
                <div className='su1sia2'>
                  <table className="ui table">
                    <thead><tr>
                      <th>漢字</th>
                      <th>臺羅</th>
                    </tr></thead>
                    <tbody>
                      <tr><td>這个</td><td>tsit ê</td></tr>
                      <tr><td>無要緊</td><td>bô iàu-kín</td></tr>
                      <tr><td>有 要緊</td><td>ū iàu-kín</td></tr>
                      <tr><td>無法度</td><td>bô-huat-tōo</td></tr>
                      <tr><td>有 法度</td><td>ū huat-tōo</td></tr>
                      <tr><td>掠人</td><td>lia̍h lâng</td></tr>
                      <tr><td>一个人</td><td>tsi̍t ê lâng</td></tr>
                      <tr><td>一個月</td><td>tsi̍t kò gue̍h</td></tr>
                      <tr><td>遮爾</td><td>tsiah-nī</td></tr>
                    </tbody>
                  </table>
                </div>
    );
  }
}
