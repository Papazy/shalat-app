import {Stack, useNavigation} from "expo-router"
import { useEffect } from "react";

export default function Layout(){
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({headerShown: false})
    },[navigation])
    return(
        <Stack>
            <Stack.Screen name="praktekShalat" />
            <Stack.Screen name="[id]" />
            {/* <Stack.Screen name="1" />
            <Stack.Screen name="2" />
            <Stack.Screen name="3" />
            <Stack.Screen name="4" />
            <Stack.Screen name="5" />
            <Stack.Screen name="6" />
            <Stack.Screen name="7" />
            <Stack.Screen name="8" />
            <Stack.Screen name="9" />
            <Stack.Screen name="10" />
            <Stack.Screen name="11" />
            <Stack.Screen name="12" />
            <Stack.Screen name="13" /> */}
        </Stack>
    )
}