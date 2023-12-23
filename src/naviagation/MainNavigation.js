import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import TrackList from '../screens/TrackList';
import CreateTrack from '../screens/CreateTrack';
import TrackDetails from '../screens/TrackDetails';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();



const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}>
      <Tab.Screen name='TrackList' component={TrackList} />
      <Tab.Screen name='TrackDetails' component={TrackDetails} />
      <Tab.Screen name='CreateTrack' component={CreateTrack} />
      <Tab.Screen name='Profile' component={Account} />
    </Tab.Navigator>
  )
}

export const MainNavigation = () => {
  const user = useSelector(state => state.user)
  return (

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {user.isLogged ? (
            <Stack.Screen name='AppStack' component={AppStack} />
          ) : (
            <Stack.Screen name='AuthStack' component={AuthStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>

  )
}