import { Stack, useNavigation } from 'expo-router'
import { useEffect } from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
SplashScreen.preventAutoHideAsync();



export default function Layout(){
    const [fontsLoaded] = useFonts({
        poppins_regular: require('../assets/fonts/Poppins-Regular.ttf'),
        poppins_bold: require('../assets/fonts/Poppins-Bold.ttf'),
       
    })
    useEffect(()=>{
    if(fontsLoaded){
        SplashScreen.hideAsync();
    }
    },[fontsLoaded]);
    if(!fontsLoaded) return null;
    return(<Stack />)
}