import { Stack, useNavigation } from 'expo-router'
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync();



export default function Layout(){
    const [fontsLoaded] = useFonts({
        poppins_regular: require('../assets/fonts/Poppins-Regular.ttf'),
        poppins_bold: require('../assets/fonts/Poppins-Bold.ttf'),
        poppins_bold_italic: require('../assets/fonts/Poppins-BoldItalic.ttf'),
        poppins_italic: require('../assets/fonts/Poppins-Italic.ttf'),
        poppins_light: require('../assets/fonts/Poppins-Light.ttf'),
       
    })
    useEffect(()=>{
    if(fontsLoaded){
        SplashScreen.hideAsync();
    }
    },[fontsLoaded]);
    if(!fontsLoaded) return null;
    return(<Stack />)
}