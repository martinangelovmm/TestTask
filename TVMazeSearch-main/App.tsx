import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'TV Maze App'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({route}) => ({title: route.params?.showItem?.show?.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
