import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ActivityIndicator, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import {Stack} from 'expo-router'

const Home = (props) => {

    // kota
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState();
    const [regencies, setRegencies] = useState([]);
    const [selectedRegency, setSelectedRegency] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [namaKota, setNamaKota] = useState('');
    const fetchRegencies = (provinceId) => {
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
            .then(response => response.json())
            .then(data => {
                setRegencies(data);
            })
            .catch(error => {
                console.error('Error fetching regencies:', error);
            });
    };
    // jadwal
    const fetchJadwalSholat = async (kota) => {
        try {
            let newKota;
            if(kota == '') newKota = 'Bireun';
            else newKota = kota;
            const apiName =
                `http://api.aladhan.com/v1/calendarByCity/2024/1?city=${newKota}&country=Indonesia&method=11`;
            let response = await fetch(apiName);
            let responseJson = await response.json();
            if (responseJson) {
                setSholatTiming(responseJson.data[0].timings);
                console.log('sholat timings ->', responseJson.data[0].timings);
            }
        } catch (error) {
            console.log('error ->', error);
        }
    };

    const [sholatTiming, setSholatTiming] = useState([]);
    useEffect(() => {
        // Ambil data provinsi saat komponen dimuat
        const fetchProvinces = async () => {
            await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setProvinces(data);
                })
                .catch(error => {
                    console.error('Error fetching provinces:', error);
                });
                
                setIsLoading(false);
        }
        fetchJadwalSholat();
        fetchProvinces();
    }, []);

   
    if(isLoading) return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><ActivityIndicator /></View>
    return (
        <>
            <Stack.Screen 
            options={{  
              headerTitle: "Jadwal",
              headerTransparent: false,
             
              headerStyle:{
                backgroundColor: '#5400CF'
              },
              headerTintColor: '#fff',
              
            }}
            />
            <ImageBackground
                source={require('../../../assets/images/bgOpening.png')}
                style={styles.bgOpening}
            ></ImageBackground>
            <StatusBar backgroundColor={'#166cbf'} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', padding:30}}>
            <View style={{ backgroundColor:'#5400CF', padding:15, borderRadius:20}}>

            <View style={{marginVertical:20}}>

            <Text style={{ fontSize:18, color:'white', fontFamily:'poppins_regular'}}> Nama kota :</Text>
            <View style={{flexDirection:'row',alignItems:'center', width:'100%', justifyContent:'space-between', borderWidth:1, paddingHorizontal:10, paddingVertical:5, gap:10, borderRadius:10, backgroundColor:'white'}}>
                <TextInput 
                    style={{fontFamily:'poppins_regular', width:'70%'}}
                    placeholder="Jakarta"
                    onChangeText={(text) => setNamaKota(text)}
                    value={namaKota}
                    
                    />
                    <Button title="Cari" onPress={() => fetchJadwalSholat(namaKota)} />
            </View>
            </View>

            <RenderJadwalSholat title='Subuh' time={sholatTiming.Fajr} />
            <RenderJadwalSholat title='Dzhuhur' time={sholatTiming.Dhuhr} />
            <RenderJadwalSholat title='Ashar' time={sholatTiming.Asr} />
            <RenderJadwalSholat title='Maghrib' time={sholatTiming.Maghrib} />
            <RenderJadwalSholat title='Isya' time={sholatTiming.Isha} />
            
            <Text style={{ fontSize:12, color:'white', fontFamily:'poppins_regular', marginTop:40}}> * Cari sesuai dengan nama kota. bila salah input, maka sistem akan mencari nama kota yang paling mirip</Text>
                    </View>

        </View>
        </>
    );
};
const RenderJadwalSholat = ({title, time}) => (
    <>  
        <View
            style={{
                flexDirection: 'row',
                paddingVertical: 16,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: 'white',
                marginHorizontal: 8,
                justifyContent:'space-between'
            }}>
            <Text style={{fontFamily:'poppins_regular', fontSize:16, color: 'white' }}>{title}</Text>
            <Text style={{fontFamily:'poppins_regular', fontSize:16, color: 'white' }}>{time}</Text>
        </View>
    </>
);

const styles = StyleSheet.create({
    subtitle: {},
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 80, paddingHorizontal: 20 },
    bgOpening: {
        position: 'absolute',
        height: '120%',
        width: '120%',
        top: -400
    },
    text: {
        textAlign: 'center',
        //  fontFamily: 'Poppins_800ExtraBold', 
        color: 'white', textShadowColor: 'black', textShadowOffset: { width: 5, height: 2 }, textShadowRadius: 10
    },
    text_atas: {
        fontFamily: 'poppins_bold',
        // fontStyle:'italic',
        fontSize: 36,
        marginBottom: 20,
        paddingBottom: 10,
        paddingHorizontal: 50,
        marginTop: 0,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',

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
    card: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center', justifyContent: 'center',
        paddingHorizontal: 3,
        paddingVertical: 5,
    },
    card_main: {
        backgroundColor: '#8C52FF',
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom:30
    },
    card_title: {
        fontSize: 20,
        marginTop: 15,
        fontWeight: '700'
    }
})


export default Home;