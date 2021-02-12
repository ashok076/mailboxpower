import React from 'react';
import { View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../Screen/Login/Login';
import Register from '../../Screen/Register/Register';

const Stack = createStackNavigator();

const MainStackNavigator = () => (

    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
);

export default MainStackNavigator;
