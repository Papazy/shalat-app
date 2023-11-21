import React from "react";
import { Stack, useRouter } from 'expo-router'
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { Link } from 'expo-router';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Back from "../../../../assets/icons/back"
import { useState, useEffect } from "react";
// import Card_data from "../components/card_data";
// import Burger from "../../../../assets/icons/burger";

const shalatData = require('../../../../assets/shalat/fardhu.json');

const fardhu = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        // Simulate fetching data from shalat.js
        setData(shalatData);
      };
    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
      }, []);

    return (
        <>
            <Stack.Screen options={{
                headerTitle: "",
                headerTransparent: true,
                headerTintColor:'white'
            }}/>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../../../../assets/images/bg_opening.png')}
                    style={styles.bg_opening}
                    >
                </ImageBackground>
                {/* <View style={styles.header}>
                    <Back />
        
                    
                </View> */}
                <ScrollView>
    
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:'20%', }}>
             
                        <Text style={styles.text_atas}>Shalat Fardhu</Text>

                        <Image source={require('../../../../assets/images/shalatyuk.png')} />
                        
                                
                            <View style={styles.cardWrapper}>
                            {data.map((item) => (
                                <TouchableOpacity style={styles.kartu} key={item.id}>
                                    <Text style={styles.kartu_id}>{item.id}. {item.nama}</Text>
                                    
                                </TouchableOpacity>
                                ))}
                            </View>
                            
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )

}
const styles = StyleSheet.create({

    // card title
    kartu:{
        flex:1,
        alignItems: 'flex-start', justifyContent: 'flex-start',
        flexDirection:'row',
        padding:20,
        backgroundColor: "#6345D4",
        paddingEnd: 20,
        borderRadius: 10
    },
    kartu_id:{
        color: "#fff"
    },
  

    container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 0, top: 0, paddingTop: 0, width:'100%' },
    bg_opening: {
        position: 'absolute',
        height: '120%',
        width: '120%',
        top: -400
    },
    text: { textAlign: 'center',
    //  fontFamily: 'Poppins_800ExtraBold',
      color: 'white', textShadowColor: 'black', textShadowOffset: { width: 5, height: 2 }, textShadowRadius: 10 },
    text_atas: {
        fontSize: 40,
        marginBottom: 10,
        paddingBottom: 0,
        marginTop: 0,
        color: 'white',
        fontWeight: '700'

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
        // fontFamily: 'Poppins_400Regular',
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
    cardWrapper: {
        backgroundColor:'rgba(47, 77, 173, 0.29)',
        borderRadius: 10,
        width:'100%',
        padding: 10,
        gap: 5
    }

})


export default fardhu;