import React from "react";
import { Stack, useRouter, useNavigation } from 'expo-router'
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { Link } from 'expo-router';
import { ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

const rukunData = require('../../../assets/shalat/rukun.json')

const rukunShalat = () => {
    const navigation = useNavigation();

    const [data,setData] = useState([]);

    const fetchData = () => {
        setData(rukunData);
      };
    useEffect(()=>{
        fetchData()
    },[]);

    

    return (
        <>
                <SafeAreaView style={styles.container}>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: '#fff'
            }}/>
                <ImageBackground
                    source={require('../../../assets/images/bg_opening.png')}
                    style={styles.bg_opening}
                >
                </ImageBackground>
                <ScrollView style={{height:'100%', width:'100%', padding:20 }}>
                    <Text style={styles.title}>Rukun Shalat</Text>
                    {data.map((item) => (
                        <TouchableOpacity onPress={()=>{navigation.navigate("[id]", {id: item.id})}} style={styles.kartu} key={item.id}>
                            <Text style={styles.kartu_id}>{item.id}. {item.nama}</Text>
                        </TouchableOpacity>
                        ))}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    kartu:{
        flex:1,
        alignItems: 'flex-start', justifyContent: 'flex-start',
        flexDirection:'row',
        padding:20,
        backgroundColor: "#6345D4",
        paddingEnd: 20,
        borderRadius: 10,
        marginBottom:10,
        marginTop:5,
        // marginEnd:20,
        // marginStart:20,
    },
    kartu_id:{
        color: "#fff"
    },
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:60 },
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
    card : {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center', justifyContent: 'center',
        paddingHorizontal: 3,
        paddingVertical: 5,
    },
    card_main : {
        backgroundColor: 'purple',
        alignItems: 'center', 
        justifyContent: 'center',
        padding : 20,
        paddingBottom : 50,
        borderRadius: 20
    },
    card_title : {
        fontSize:20,
        marginTop:15,
        fontWeight: '700'
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20,
        color: '#6345D4'
    
    }
})


export default rukunShalat;