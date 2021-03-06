import React from 'react';
import { Text, ScrollView } from 'react-native';
import {
  createStackNavigator,
  //tap menu
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Home from './screens/containers/home';
import Category from './screens/containers/category';
import Movie from './screens/containers/movie';
import About from './screens/containers/about';
import Lucky from './screens/containers/lucky';
import Icon from './screens/components/home-icon';
import DrawerContent from './sections/components/drawer';
import Header from './sections/components/header';
import Loading from './screens/containers/loading';
import Login from './screens/containers/login';
import Profile from './screens/containers/profile';

const routes = {
  // Movie: {
  //   screen: Movie
  // },
  Home: {
    screen: Home
  },
  Category: {
    screen: Category
  },
}
// const didUpdate = createDidUpdateCallback("root");

const AppNavigator = createStackNavigator(routes, {
  navigationOptions: {
    header: Header,
  },
  initialRouteName: 'Home',
  headerMode: 'float',
  mode: 'card',
  headerTransitionPreset: 'fade-in-place',
  cardStyle: {
    backgroundColor: 'white',
  }
})
// menu bottom
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      title: 'Inicio',
      tabBarIcon: Icon,
    }
  },
  About: {
    screen: About
  },
  Lucky: {
    screen: Lucky,
  },
  Profile: {
    screen: Profile
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#3c93b9',
    backgroundColor: '#65a721'
  }
})

const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    Movie: {
      screen: Movie,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#e1effa',
    },
    navigationOptions: {
      gesturesEnabled: true,
    }
  }
);

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: Icon,
      }
    },
    Sobre: {
      screen: About
    },
    Suerte: {
      screen: Lucky,
    },
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    backgroundColor: 'red',
    contentComponent: DrawerContent,
    contentOptions: {
      activeBackgroundColor: '#7aba2f',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)',
      },
      labelStyle: {
        marginHorizontal: 0,
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      }
    }
  }
)

const DrawerStacked = createStackNavigator(
  {
    Main: Drawer
  },{
    headerMode: 'none',
  }
)
// Login
const Main = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    App: DrawerStacked,
  },
  {
    initialRouteName: 'Loading',
  }
)


export default Main;
