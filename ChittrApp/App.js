import React from 'react';
import {createAppContainer, createNavigationContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartUp from './screens/Startup'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'
import LandingPage from './screens/LandingPage'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import PostChit from './screens/PostChit'
import EditAccount from './screens/EditAccount'


//import Following from './screens/Following'
//import Followers from './screens/Followers'



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
  LandingPage:{
    screen: LandingPage
  },
  Feed:{
    screen: Feed
  },
  Profile:{
    screen: Profile
  },
PostChit:{
    screen: PostChit
  },

  EditAccount:{
    screen: EditAccount
  },
  
 /* Search:{
    screen: Search
  },

	Following:{
    screen: Following
  },
  
  Followers:{
    screen: Followers
  },
  */
  
  Map:{
    screen: Map
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



