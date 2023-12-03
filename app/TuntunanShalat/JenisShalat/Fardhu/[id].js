// Create a page that displays data from shalat_sunnah.json based on the parameter [id].
const shalatData = require('../../../../assets/shalat/fardhu.json');

import { useNavigation, Stack, useLocalSearchParams} from 'expo-router'
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Wajengan from '../../../../assets/wajengan';


export default function page(){
    const [data, setData] = useState([]);
    const {id} = useLocalSearchParams();
    const dataShalat = shalatData.find((item) => item.id === id);
    const fetchData = () => {
        setData(dataShalat);
      };
    useEffect(() => {
        fetchData();
      }, []);
    return (
        <>
            <Stack.Screen options={{
                headerTitle: "",
                headerTransparent: true,
                headerTintColor:'#924dbf'
            }}/>
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../../../../assets/images/bg_opening.png')}
                    style={styles.bg_opening}
                    >
                </ImageBackground>
                {/* <View style={styles.header}>
                    <Back />
        =========e
                    
                </View> */}
                <ScrollView>
    
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:'20%', }}>
             
                        <Text style={styles.text_atas}>Shalat {data.nama}</Text>

                        
                                
                            <View style={styles.cardWrapper}>
                            
                                <TouchableOpacity style={styles.kartu} key={data.id}>
                                    <Text style={styles.span}>Deskripsi</Text>
                                    <Text style={styles.kartu_id}>{data.deskripsi}</Text>

                                    <Text style={styles.span}>Waktu: </Text>
                                    <Text style={styles.kartu_id}>{data.waktu}</Text>

                                    
                                    <Text style={styles.kartu_id}><Text style={styles.span}>Jumlah Rakaat:</Text> {data.jumlah_rakaat}</Text>

                                    <Text style={styles.span}>Niat:</Text>
                                    <Text style={styles.kartu_id}>{data.Niat}</Text>

                                </TouchableOpacity>
                            </View>

                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    container: {marginTop: 0, top: 0, paddingTop: 0, width:'100%' },
    bg_opening: {
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
        textAlign:'justify'
    },
    span : {
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: 'poppins_bold',
        color: '#2c3e50'
    },
    text_atas: {
        fontSize: 40,
        marginBottom: 40,
        paddingBottom: 0,
        marginTop: 0,
        color: '#3f1651',
        fontWeight:'700'
    
    }

})