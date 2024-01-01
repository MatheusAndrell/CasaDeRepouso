import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../../assets/img/biird.png';
import styles from './style';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.text, { textAlign: 'center', fontSize: 16 }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useNavigation(null);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        navigation.navigate('Ponto');
      }
    } catch (error) {
      console.log('Error checking login status:', error);
    }
  };

  const saveLoginData = async () => {
    try {
      await AsyncStorage.setItem('user', user);

    } catch (error) {
      console.log('Error saving login data:', error);
    }
  };

  async function sendForm() {
    try {
      let response = await fetch('http://192.168.0.109:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user,
          password: password,
        }),
      });

      if (response.ok) {
        console.log('Login bem-sucedido!');
        setErrorMessage(null);
        saveLoginData();
        navigation.navigate('Ponto');
      } else {
        throw new Error('Erro na autenticação');
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
      setErrorMessage('Login ou senha inválidos!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.formContainer}>
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <TextInput
          placeholderTextColor="white"
          placeholder="Usuário"
          style={styles.input}
          onChangeText={(text) => setUser(text)}
          value={user}
        />
        <TextInput
          placeholderTextColor="white"
          placeholder="Senha"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
      </View>
      <View style={styles.passwordForget}>
        <Text style={styles.forgetPassword}> Esqueceu sua senha?</Text>
        <CustomButton title="ENTRAR" onPress={() => sendForm()} />
      </View>
    </View>
  );
};

export default LoginScreen;
