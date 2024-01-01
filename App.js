import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './src/pages/login/';
import User from './src/pages/user/';
import Ponto from './src/pages/ponto/';
import Infos from './src/pages/infos/';
import Menu from './src/components/menu'

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="User" component={User}/>
        <Stack.Screen name="Ponto" component={Ponto}/>
        <Stack.Screen name="Infos" component={Infos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
