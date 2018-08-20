import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers.jsx';
import createSagaMiddleware from 'redux-saga';
import { WatchAll } from '../sagas/sagas.jsx';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,

	compose(applyMiddleware(sagaMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

sagaMiddleware.run(WatchAll);


export default store;
