import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import styles from './style';
import { Ionicons, AntDesign, Fontisto } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const Ponto = ({ route }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [nextPointTime, setNextPointTime] = useState('22:10');
  const navigation = useNavigation();


  useEffect(() => {
    moment.locale('pt-br');

    const intervalId = setInterval(() => {
      const time = moment().format('HH:mm');
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const setAlarm = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/ponto/}`);
      const data = await response.json();

      if (response.ok) {
        const alarmTime = moment().add(data.nextPointInHours, 'hours');
        const formattedAlarmTime = alarmTime.format('HH:mm');

        PushNotification.localNotificationSchedule({
          message: 'Alarme disparado!',
          date: new Date(alarmTime),
        });

        setNextPointTime(formattedAlarmTime);
      } else {
        console.log('Erro ao obter informações do ponto');
      }
    } catch (error) {
      console.error('Erro ao definir o alarme:', error);
    }
  };

  const stopAlarm = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.nextTime}>Seu próximo ponto será no horário:</Text>
        <Text style={styles.nextHour}>{nextPointTime}</Text>
      </View>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: -23.4488972423087,
          longitude: -46.56708854310958,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.4488972423087, longitude: -46.56708854310958 }}
          title="Posição Específica"
          description="Descrição do marcador"
        />
      </MapView>
      <View style={styles.botaoPonto}>
        <TouchableOpacity onPress={() => setAlarm()}>
          <Ionicons style={styles.iconClock} name="alarm-outline" size={40} color="gray" />
        </TouchableOpacity>
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

export default Ponto;
