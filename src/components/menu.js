import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Ionicons,
    AntDesign,
    Fontisto,
} from '@expo/vector-icons';

export default function Menu() {
    const navigation = useNavigation();

    return (
            <View style={styles.menuInferior}>
                <AntDesign name="user" size={24} color="white" style={styles.icon} />
                <AntDesign name="clockcircleo" size={24} color="white" style={styles.icon} />
                <Fontisto name="date" size={24} color="white" />
            </View>
    );
}