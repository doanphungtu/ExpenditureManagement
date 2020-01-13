import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import DealScreen from '../Containers/DealScreen'
import AddScreen from '../Containers/AddScreen'
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from '../Containers/HomeScreen'
import InputMoneyScreen from '../Containers/InputMoneyScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    AddScreen: { screen: AddScreen }
  },
  {
    headerMode: 'float',
    initialRouteName: 'AddScreen',
  }
)
const tabNavigator = createBottomTabNavigator(
  {
    Hometab: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        ),
        tabBarLabel: "Trang chủ",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.navigate("HomeScreen");
          defaultHandler();
        }
      }
    },
    Plantab: {
      screen: DealScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="clipboard-text" size={20} color={tintColor} />
        ),
        tabBarLabel: "Giao dịch",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.navigate("DealScreen");
          defaultHandler();
        }
      }
    },
    Charttab: {
      screen: LaunchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="pie-chart" size={20} color={tintColor} />
        ),
        tabBarLabel: "Thống kê",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.navigate("HomeScreen");
          defaultHandler();
        }
      }
    },
    Profiletab: {
      screen: LaunchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon1 name="account" size={25} color={tintColor} />
        ),
        tabBarLabel: "Tài khoản",
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          navigation.navigate("HomeScreen");
          defaultHandler();
        }
      }
    },
  },
  {
    headerMode: "none",
    tabBarOptions: {
      activeTintColor: "#3366FF",
      style: {
        backgroundColor: "#FFFFFF"
      }
    }
  })
const PrimaryNav = createStackNavigator({
  // LaunchScreen: { screen: LaunchScreen },
  DealScreen: { screen: DealScreen },
  tabNavigator: { screen: tabNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  // initialRouteName: 'tabNavigator',
  // navigationOptions: {
  //   headerStyle: styles.header
  // }
})
const SwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  InputMoneyScreen: { screen: InputMoneyScreen },
  App: { screen: PrimaryNav },
  // testScreen: { screen: tabNavigator }
},
  {
    initialRouteName: 'App'
  }
)
export default createAppContainer(SwitchNavigator);
