import React from "react";
import { Stack, useNavigation, useRouter } from 'expo-router'
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
const data = require('../../../../assets/shalat/fardhu.json');
import Wajengan from "../../../../assets/wajengan";
const sunnah = () => {

    const handleOnPress = (id) => {
        const navigation = useNavigation()
        return () => {
            navigation.navigate("[id]", {id:id})
        }
    }

    return (
        <>
        <Stack.Screen 
            options={{
                headerTitle: "Shalat Fardhu",
                headerTransparent: false,
                headerStyle: {backgroundColor: '#924dbf'},
                headerTintColor:'white',
                headerTitleStyle:{
                    fontFamily: 'poppins_bold',
                    
                }
            }}
        />
                <ImageBackground
                    source={require('../../../../assets/images/bgOpening.png')}
                    style={styles.bgOpening}
                    >
                </ImageBackground>
                
            <ScrollView style={[styles.container, {paddingTop:10}]}>
                {/* <View styles={styles.cardContainer}> */}
                    {data.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.cardWrapper} onPress={handleOnPress(item.id)}>
                            <Text style={styles.kartu_id}>{item.nama}</Text>
                        </TouchableOpacity>
                    ))}
                {/* </View> */}
                    <View style={{flex:1, justifyContent:'center', alignItems:'center', padding: 0, marginTop: '10%'}}>
                        <Wajengan />
                    </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {marginTop: 0, top: 0, paddingTop: 0, width:'100%' },
    bgOpening: {
        width: '150%',
        height: "150%",
        marginTop: 0,
        top: -50,
        left: -100,
        paddingTop: 0,
        position: 'absolute',
    },
    
    img_opening: { marginTop: 50 },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'30%',
    },
    cardWrapper:{
        backgroundColor: '#fff',
        width: '100%',
        // height: 50,
        // borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        // borderBottomColor: 'purple',
        // borderBottomWidth: 2,

        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    kartu_id:{
        color: "#000",
        fontSize: 18,
        // textAlign: 'center',
        fontFamily: 'poppins_regular',
    }

})


export default sunnah;