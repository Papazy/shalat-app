import {useNavigation, Stack} from "expo-router"
import { useEffect } from "react";
export default function Layout(){
    const navigation = useNavigation();
    useEffect (()=> {
          navigation.setOptions({headerShown:false});
        },[navigation]);

    
    return (<Stack>
        <Stack.Screen name="fardhu" options={{headerTransparent:true, headerTitle:""}}/>
        <Stack.Screen name="[id]" options={{headerTransparent:true, headerTitle:""}}/>
        
    </Stack>)
}