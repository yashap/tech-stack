import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header, Card, CardSection } from './src/component/common';
import reducer from './src/reducer';

const App = () => (
  <Provider store={createStore(reducer)}>
    <View>
      <Header text='Tech Stack'/>

      <Card>
        <CardSection>
          <Text>Go get it son!</Text>
        </CardSection>
        <CardSection>
          <Text>Yeahhh...</Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <Text>Boom!</Text>
        </CardSection>
      </Card>
    </View>
  </Provider>
);

export default App;
