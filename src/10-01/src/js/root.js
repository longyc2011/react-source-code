import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/details' component={ComponentDetails}/>
          <Route path='/list' component={ComponentList}/>
          <Route exact path='/' component={Index}/>
        </div>

      </Router>
    );
  };
}

ReactDOM.render(
  <Root/>, document.getElementById('example'));
