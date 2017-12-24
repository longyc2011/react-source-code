import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

export default class Root extends React.Component {
  render() {
    return (

<div>init2</div>
    );
  };
}

ReactDOM.render(
  <Root/>, document.getElementById('mainContainer'));
