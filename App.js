import React from 'react';
import {createAppContainer, createNavigationContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartUp from './screens/Startup'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'

const AppStackNav = createStackNavigator({

  StartUp:{
    screen: StartUp
  },
  LogIn:{
    screen: LogIn
  },
  SignUp:{
    screen: SignUp
  },
  },
  
  { 
   initialRouteParams: StartUp,
    headerMode: 'none',
  });

//Allows navigation around the app
const AppContainer = createAppContainer(AppStackNav);

//Tells React to Open the App Container
export default AppContainer;



