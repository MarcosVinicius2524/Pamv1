import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cadastrar from '../paginas/cadastro'
import StackRoutes from './stackRoutes'
const Tab = createBottomTabNavigator();


export default function Rotas (){

return(

    <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:'black'}}}>
        <Tab.Screen name = 'HomeStack' component={StackRoutes}
         

         ></Tab.Screen>
        <Tab.Screen name = 'Cadastrar' component={Cadastrar}></Tab.Screen>

    </Tab.Navigator>

);
}