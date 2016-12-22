import React from 'react';
import ReactDOM from 'react-dom';

export default class 一個詞 extends React.Component {

	constructor(props) {
    super(props);
    this.state = {};
  } 

	render(){

		return (	
     	<ruby>
       	{this.props.漢字}
       	<rt>{this.props.臺羅}</rt>
      	</ruby>
    	);
	}
}