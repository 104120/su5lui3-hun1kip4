import React from 'react';
import { Link } from 'react-router';
import 書寫規範 from './書寫規範';

export default class 頁頭 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  open書寫規範() {
    this.setState({ modalIsOpen: true });
  }

  close書寫規範() {
    this.setState({ modalIsOpen: false });
  }

  render () {
    return (
      <header className='app header'>
        <div className='app bar container'>
          <ul className='ui menu container inverted'>
            <li className='item'>
              <Link to='/'>首頁</Link>
            </li>
            <li className='item'>
              <a href='#' onClick={this.open書寫規範.bind(this)}>書寫規範</a>
            </li>
            <li className='item'>
              <Link to='/%E5%AD%97%E6%95%B8/'>字數</Link>
            </li>
            <li className='item'>
              <a href='https://www.facebook.com/groups/1176719339085090/1182176585206032/?notif_t=group_activity&notif_id=1479125586448144'>FB社團</a>
            </li>
            <li className='item'>
              <a href='https://github.com/sih4sing5hong5/su5lui3-hun1kip4'>網站程式碼</a>
            </li>
          </ul>
        </div>

        <書寫規範 modalIsOpen={this.state.modalIsOpen}
          closeModal={this.close書寫規範.bind(this)}/>
      </header>
    );
  }
}
