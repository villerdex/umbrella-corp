
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import './css/index.less';

//views 
import App from './views/App';

// middlewares redux and redux sage
import { reducer } from './reducer/redux';
import { watcherSaga } from './sagas/saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let middleware = compose(applyMiddleware(sagaMiddleware));
// let middleware = compose(applyMiddleware(sagaMiddleware));

// create a redux store with our reducer above and middleware
let store = createStore(
    reducer, middleware
  );

  // run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={store}>
      <Router history = {browserHistory}>
        <Switch>
          <Route exact path='/' component={App}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  );