import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import BottomTabNavigator from '../navigation/BottomTabNavigator';

export default class Settings extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Settings",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    ),
  })

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
        {/* <BottomTabNavigator /> */}
      </View>
    )
  }
}
