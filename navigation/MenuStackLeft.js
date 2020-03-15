import * as React from 'react';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerContent, DrawerItem,
} from '@react-navigation/drawer';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Settigs from '../screens/Settings';
import Icon from '@expo/vector-icons/Ionicons'
import BottomTabNavigator from './BottomTabNavigator';
const INITIAL_ROUTE_NAME = 'Home'
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


export default function MyDrawer({ navigation, route }) {

  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerLeft: () => <Icon
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      name="md-menu" size={30}
      style={{ paddingLeft: 10 }}
    />
  })
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)} >
      <Drawer.Screen name='Main' component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={Settigs} />

    </Drawer.Navigator>
  );
}
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'Profile';
    case 'Movies':
      return 'Movies';
    case 'Settings':
      return 'Settings';
    default:
      return 'No header set yet :('
  }
}


