import React from 'react';
import SwitchNav from './src/routes'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './mainReducer';

const store = createStore(mainReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <SwitchNav />
      </Provider>
    );
  }
}
