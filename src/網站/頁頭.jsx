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
          <div className='ui stackable menu container inverted'>
            <div className="header item">
              <i className="ui book icon"></i>詞彙分級
            </div>
            <Link to='/' className='item'>首頁</Link>
            <a href='#' onClick={this.open書寫規範.bind(this)} className='item'>書寫規範</a>
            <Link to='/%E5%AD%97%E6%95%B8/' className='item'>字數</Link>
            <a className='item' href='https://www.facebook.com/groups/1176719339085090/1182176585206032/?notif_t=group_activity&notif_id=1479125586448144'>FB社團</a>
            <a className='item' href='https://github.com/sih4sing5hong5/su5lui3-hun1kip4'>網站程式碼</a>
          </div>
        
        <書寫規範 modalIsOpen={this.state.modalIsOpen}
          closeModal={this.close書寫規範.bind(this)}/>
      </header>
    );
  }
}
