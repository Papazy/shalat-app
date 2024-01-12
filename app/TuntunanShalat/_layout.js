import {Stack, useNavigation} from "expo-router"
import { useEffect } from "react";
export default function Layout(){
     const navigation = useNavigation();
    useEffect (()=> {
          navigation.setOptions({headerShown:false});
        },[navigation]);

    return (
        <Stack >
            <Stack.Screen name="index"/>
            <Stack.Screen name="JenisShalat" />
            <Stack.Screen name="RukunShalat" />
            <Stack.Screen name="PraktekShalat" />
            <Stack.Screen name="Catatan" /> 
            <Stack.Screen name="About" /> 
            <Stack.Screen name="Jadwal" options={{headerShown:false}}/> 
        </Stack >
    )
}