import {useNavigation, Stack} from "expo-router"
import { useEffect } from "react";
export default function Layout(){
    const navigation = useNavigation();
    useEffect (()=> {
          navigation.setOptions({headerShown:false});
        },[navigation]);

    
    return (
    <Stack>
    
        <Stack.Screen name="sunnah" options={{headerTransparent:true}}/>
        <Stack.Screen name="[id]" />
    </Stack>)
}