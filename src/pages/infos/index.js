import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/img/biird.png';
import styles from './style';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Infos = ({ route }) => {
  const [infoData, setInfoData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchInfoData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/infos/`);
        const data = await response.json();

        if (response.ok) {
          setInfoData(data);
        } else {
          console.log('Erro ao obter informações gerais');
        }
      } catch (error) {
        console.error('Erro ao buscar informações gerais:', error);
      }
    };

    fetchInfoData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <Text style={styles.number}>15</Text>
            <Text style={styles.label}>dias</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.number}>50%</Text>
            <Text style={styles.label}>concluído</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.number}>120</Text>
            <Text style={styles.label}>horas</Text>
          </View>
        </View>
        <View style={styles.maps}></View>
      </View>
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

export default Infos;
