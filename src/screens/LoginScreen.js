import React from "react"
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style = {styles.container}>

        <Text style={styles.topText}>arahkita</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
  topText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'white'
  }
})

export default LoginScreen;