import {Stack, useNavigation} from "expo-router"
import { useEffect } from "react";
import jenisShalat from "./JenisShalat/jenisShalat";
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
           
        </Stack >
    )
}