import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Loading from './src/sections/components/loading';
// import AppLayout from './src/app';
import AppWithNavigationState from './src/app-with-navigator-state';


class App extends Component{
  render() {
    // console.disableYellowBox = true;
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}


export default App;
