import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import {Button} from 'antd';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import PCIndex from './components/pc_index'
export default class Root extends React.Component {
  render() {
    return (
			<div>
				<PCIndex/>
			</div>
    );
  };
}

ReactDOM.render(
  <Root/>, document.getElementById('mainContainer'));
