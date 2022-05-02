import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/Navigator';
import { OrdersProvider } from './src/context/orders';
import { Text } from 'react-native';


const App = () => (
  <Text>Hello React Native</Text>
);


// const App = () => (
//   <NavigationContainer>
//     <OrdersProvider>
//       <Navigator />
//     </OrdersProvider>
//   </NavigationContainer>
// );

export default App;
