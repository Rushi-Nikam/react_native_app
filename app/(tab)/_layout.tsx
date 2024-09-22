
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

function TabRoot(){
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{title:"HOME",  tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,}}/>
        <Tabs.Screen name='service'options={{title:"SERVICE", tabBarIcon: ({ color }) => <MaterialIcons size={28} name="miscellaneous-services" color={color} />}} />
        <Tabs.Screen name='contact' options={{title:"CONTACT",tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />}}/>
    </Tabs>
  )
}
export default TabRoot;


