import React from 'react';
import { Link } from 'react-router';

export default class 頁頭 extends React.Component {
  render () {
    return (
      <header className='app header'>
        <div className='app bar container'>
          <ul className='ui menu container inverted'>
            <li className='item'>
              首頁
            </li>
            <li className='item'>
              書寫規範
            </li>
            <li className='item'>
              <a href='https://www.facebook.com/groups/1176719339085090/1182176585206032/?notif_t=group_activity&notif_id=1479125586448144'>FB社團</a>
            </li>
            <li className='item'>
              <a href='https://github.com/sih4sing5hong5/su5lui3-hun1kip4'>網站程式碼</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
