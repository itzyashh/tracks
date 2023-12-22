import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from './src/screens/Account';
import TrackList from './src/screens/TrackList';
import CreateTrack from './src/screens/CreateTrack';
import TrackDetails from './src/screens/TrackDetails';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='TrackList' component={TrackList} />
      <Tab.Screen name='TrackDetails' component={TrackDetails} />
      <Tab.Screen name='CreateTrack' component={CreateTrack} />
      <Tab.Screen name='Profile' component={Account} />
    </Tab.Navigator>
  )
}

export default function App() {

  const loggedIn = true

  return (
    <SafeAreaProvider>

    <NavigationContainer>
      {loggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    </SafeAreaProvider>
  );
}


