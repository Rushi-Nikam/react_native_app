import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {Drawer} from "expo-router/drawer"

const _layout = () => {
  return (
    <GestureHandlerRootView >
    <Drawer/>
  </GestureHandlerRootView>
  )
}

export default _layout