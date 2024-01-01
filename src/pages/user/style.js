import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0A0A1F'
    },
    picUser: {
      width: 150, 
      height: 150,
      backgroundColor: 'white',
      borderRadius: 100,
      position: 'relative',
      bottom: 100,
    },
    infos: {
        color: 'white',
        marginBottom: 30,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        bottom: 50,
    },
    nameContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      bottom: 80,
  },
  firstName: {
      color: 'white',
      fontSize: 30,
  },
  lastName: {
      color: 'white',
      fontSize: 30,
  },
    sair: {
        color: 'red',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        top: 50,
        bottom: 0,
    },
    iconClock: {
        position: 'relative',
        top: 7,
        left: 10,
    },
    menuInferior: {
        position: 'relative',
        top: 100,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginRight: 100, 
      },
  });
  

export default styles;
