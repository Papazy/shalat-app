import React from "react"
import { useEffect } from "react"
import { useNavigation } from "expo-router";
import { Text, Image, ImageBackground, View, StyleSheet } from "react-native"
// import { useFonts, Poppins_800ExtraBold, Poppins_400Regular } from "../assets/fonts/index"
// import { TouchableOpacity } from "react-native"
// import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from "react-native";


const Home = () => {
    
    const navigator = useNavigation();
    useEffect(()=>{
        navigator.setOptions({headerShown: false});
    },[navigator])
    return (
        <>
            <SafeAreaView style={styles.container}> 
                <ImageBackground 
                source={require('../assets/images/bg_opening.png') }
                style={styles.bg_opening}
                >
                </ImageBackground>
                <Image
                    source={require('../assets/images/logo.png')} style={styles.img_opening}
                    /> 
                <View>
                <Text style={[styles.text_atas, styles.text]}>SHALAT</Text>
                <Text style={[styles.text_bawah, styles.text]}>APP</Text>
                
                </View> 
                <Link style={styles.button} href="/TuntunanShalat/">
                    <Text style={styles.buttonText}>Get Started</Text>
                </Link>
                <Text></Text>
                <Text></Text>
                <Text style={styles.text_subtitle}>Develop by{'\n'}Aulia</Text>
                
            </SafeAreaView>
        </>
    )
}



const styles = StyleSheet.create({
    container : {flex:1, alignItems:'center', width:'100%'},
    bg_opening : {
        position:'absolute',
        height:'100%',
        width: '100%',
        top:-200    
    },
    text: {textAlign:'center',
    fontFamily:'poppins_bold', 
    color:'white',textShadowColor:'black', textShadowOffset:{width:5,height:2}, textShadowRadius:10},
    text_atas : { fontSize:40, marginBottom:0, paddingBottom:0, lineHeight:50},
    text_bawah : { fontSize:70, marginTop:0 , paddingTop:0, lineHeight:80},
    img_opening: {marginTop:50},
    button : {
        position: "absolute",
        bottom:'18%',
        height:'auto',
        backgroundColor: '#C471ED',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        // marginTop: '40%',
        shadowColor: 'black',
        shadowOffset: {width:3, height:2},
        shadowRadius: 5,
        shadowOpacity: 60
    },
    buttonText : {
        color:'black',
        fontSize:20,
        fontFamily:'poppins_regular',
        color: 'white'
    },
    text_subtitle : {
        position:"absolute",
        bottom: '10%',
        fontSize:13,
        textAlign: 'center'
    }
})

export default Home