import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/store';
import Wrapper from './Wrapper';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <Wrapper />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
