import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0A0A1F'
    },
    time: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      bottom: 100,
    },
    timeText: {
      fontSize: 50,
      color: 'white',
    },
    nextTime: {
        fontSize: 14,
        color: 'white',
    },
    nextHour: {
        color: 'white',
        fontSize: 20,
    },
    maps: {
        width: 300,
        height: 200,
        backgroundColor: '#020211',
        position: 'relative',
        bottom: 30,
        borderRadius: 10,
    },
    botaoPonto: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: 'white',
        position: 'relative',
        top: 50,
    },
    iconClock: {
        position: 'relative',
        top: 7,
        left: 10,
    },
    menuInferior: {
        position: 'relative',
        top: 130,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginRight: 100, 
      },
  });
  



export default styles;
