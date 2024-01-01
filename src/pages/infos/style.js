import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A1F',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 140,
    },
    logo: {
        width: 80,
        height: 80,
    }, 
    table: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 130,
        right: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cell: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: 24,
        color: 'white',
        marginLeft: 60, 
    },
    label: {
        fontSize: 16,
        color: 'white',
        marginLeft: 60, 
    }, 
    maps: {
        width: 300,
        height: 150,
        backgroundColor: '#020211',
        position: 'relative',
        top: 20,
        left: 24,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconClock: {
        position: 'relative',
        top: 7,
        left: 10,
    },
    menuInferior: {
        position: 'relative',
        top: 170,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginRight: 100, 
      },
});



export default styles;
