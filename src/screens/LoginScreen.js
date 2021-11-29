import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { AsyncStorage } from '@react-native-community/async-storage';
import axios from 'axios'

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = async () => {
    try {
      const usersData = await axios.get('https://api.github.com/users/sulthonuladib');

      setLoginStorage(usersData.data.login);
    } catch (error) {
      alert(error)
    }
  }

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  }

  const setLoginStorage = async (username) => {
    try {
      await AsyncStorage.setItem('username', username)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>LoginArahKita</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        textContentType="password"
      />

      <Button
        title="Login"
        onPress={() => handleLoginPress()}
      />

      <Button
        title="Register"
        onPress={() => handleLoginPress()}
        style={{ marginTop: 30 }}
      />


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    flex: 1,
  },
  topText: {
    marginTop: '30%',
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
})

export default LoginScreen;
