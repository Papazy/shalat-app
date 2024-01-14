import { View, Text } from 'react-native'
import React from 'react'
import {Stack, useNavigation} from 'expo-router'



export default function _layout() {
  const navigation = useNavigation();
      React.useEffect (()=> {
            navigation.setOptions({headerShown:false});
          },[navigation]);
  return (
    <Stack/>
  )
}