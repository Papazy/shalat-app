import {useNavigation, Stack} from "expo-router"
import { useEffect } from "react";
export default function Layout(){
    const navigation = useNavigation();
    useEffect (()=> {
          navigation.setOptions({headerShown:false});
        },[navigation]);

    
    return (<Stack>
        <Stack.Screen name="jenisShalat"/>
        <Stack.Screen name="(Fardhu)/fardhu" options={{headerTransparent:true, headerTitle:""}}/>
        <Stack.Screen name="(Sunnah)/sunnah" options={{headerTransparent:true}}/>
    </Stack>)
}