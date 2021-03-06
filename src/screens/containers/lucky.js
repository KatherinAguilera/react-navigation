import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput
} from 'react-native';
import Search from '../../sections/containers/search';

class Lucky extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: <Text>⭐️</Text>,
      drawerIcon: <Text>⭐️</Text>,
      title: 'Voy a tener suerte',
    }
  }
  componentDidMount() {
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    })
  }
  componentWillUnmount() {
    this.focus.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tree}>🍀</Text>
        <Search style={styles.inputO}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tree: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },

})

export default Lucky
