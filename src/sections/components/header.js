import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';

function Header(props) {
  return (
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {props.children}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'white',
  },
  logo: {
    width: 25,
    height: 25,
 

  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: '#3c93b9',
    marginTop: Platform.select ({
      android: 24,
    }),
    alignItems: 'center',
    justifyContent:'center',
  },
  right: {

    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})

export default Header;
