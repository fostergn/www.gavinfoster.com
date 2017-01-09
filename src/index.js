import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Main from './components/Main/MainContainer';
import Project from './components/Project/ProjectContainer';
import { configureStore } from './store';

// Initialize store
const store = configureStore();
const mountApp = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="/" component={Main} >
          <Route path="project/:id" component={Project} />
        </Route>
        <Route path="*" component={Main} />
      </Route>
    </Router>
  </Provider>,
  mountApp
);
