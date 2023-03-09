import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import { fetchMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/rockets.js/rockets';

store.dispatch(fetchMissions());
store.dispatch(getRockets());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
