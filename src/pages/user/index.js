import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../../components/menu'

const User = ({ route }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function getUser() {
      try {
        let response = await AsyncStorage.getItem('userData');
        let json = JSON.parse(response);
        setUser(json);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    }
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');

      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer logout. Tente novamente.');
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.picUser} />
      <View style={styles.nameContainer}>
        <Text style={styles.firstName}>Matheus</Text>
        <Text style={styles.lastName}>Andrell</Text>
      </View>
      <Text style={styles.infos}>CPF: 123.123.123.12</Text>
      <Text style={styles.infos}>Nº Registro: 0000</Text>
      <Text style={styles.infos}>Cargo: Desenvolvedor</Text>
      <Text style={styles.sair} onPress={handleLogout}>Sair</Text>
      <View style={styles.menuInferior}>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <AntDesign name="user" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Ponto')}>
          <AntDesign name="clockcircleo" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Infos')}>
          <Fontisto name="date" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;
