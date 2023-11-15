import React from "react";
import { Stack, useRouter } from 'expo-router'
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import List from '../../assets/icons/burger'
import Bell from '../../assets/icons/bell'
import Burger from "../../assets/icons/burger";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from 'expo-router';

import { useEffect } from "react";
import * as Font from 'expo-font';
const fetchFonts = () => {
    return Font.loadAsync({
      'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
      'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    });
  };

const tuntunanShalat = () => {
    useEffect(() => {
        const loadFonts = async () => {
          await Font.loadAsync({
            'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
            'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
          });
        };
    
        loadFonts();
      }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/bg_opening.png')}
                    style={styles.bg_opening}
                >
                </ImageBackground>
                <View style={styles.header}>
                    <Burger />
                    <Bell />
                </View>
                <View style={[styles.body, styles.container]}>

                    <Text style={styles.text_atas}>Tuntunan Shalat</Text>
                    <Image source={require('../../assets/images/shalatyuk.png')} />
                    <View style={[styles.container, styles.row]}>
                        <TouchableOpacity href="" style={[styles.card,{ marginRight: 10 } ]}>
                            <Image source={require('../../assets/images/mengaji.png')} />
                            <Link href="/TuntunanShalat/RukunShalat/rukunShalat" style= {styles.card_title}>Rukun</Link>
                        </TouchableOpacity>
                        <TouchableOpacity href="./TuntunanShalat/JenisShalat/jenisShalat" style={[styles.card, { marginRight: 10 }]} >
                            <Image source={require('../../assets/images/sajadah.png')} />
                            <Link href="/TuntunanShalat/JenisShalat/jenisShalat" style= {styles.card_title}>Jenis</Link>
                        </TouchableOpacity>
                        <TouchableOpacity href="" style={[styles.card]}>
                            <Image source={require('../../assets/images/orangshalat.png')} />
                            <Link href="./TuntunanShalat/PraktekShalat/praktekShalat" style= {styles.card_title}>Praktek</Link>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/images/takbir.png')} />
                </View>
                <View style={styles.footer}>
                    <Image style={{ width: 40, height: 40 }} source={require('../../assets/images/icon-catatan.png')} />
                    <Image style={{ width: 35, height: 35 }} source={require('../../assets/images/icon-jadwal.png')} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    bg_opening: {
        position: 'absolute',
        height: '120%',
        width: '120%',
        top: -400
    },
    text: { textAlign: 'center', fontFamily: 'poppins-bold', color: 'white', textShadowColor: 'black', textShadowOffset: { width: 5, height: 2 }, textShadowRadius: 10 },
    text_atas: {
        fontSize: 40,
        marginBottom: 10,
        paddingBottom: 0,
        marginTop: 0,
        color: 'white',
        fontWeight:'700'

    },
    text_bawah: { fontSize: 75, marginTop: 0, paddingTop: 0, lineHeight: 80 },
    img_opening: { marginTop: 50 },
    button: {
        position: "absolute",
        bottom: '18%',
        height: 'auto',
        backgroundColor: '#C471ED',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        // marginTop: '40%',
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 60
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'poppins-regular',
        color: 'white'
    },
    text_subtitle: {
        position: "absolute",
        bottom: '10%',
        fontSize: 13,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',

    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        // alignItems:"center",
        // backgroundColor: 'red',
        width: '100%',
        height: '10%',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 0,
        position: 'absolute',
        top: 0
    },
    body: {
        marginTop: '20%'
    },
    footer: {
        backgroundColor: '#8C52FF',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        paddingVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 20
    },
    card : {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 3,
        paddingVertical: 5,
        // flex : 1,
        // flexDirection: 'column'
    },
    card_title : {
        fontSize:20,
        marginTop:15
    }
})


export default tuntunanShalat;