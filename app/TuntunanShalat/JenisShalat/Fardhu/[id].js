// Create a page that displays data from shalat_sunnah.json based on the parameter [id].
const shalatData = require('../../../../assets/shalat/fardhu.json');

import { useNavigation, Stack, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Wajengan from '../../../../assets/wajengan';
import {Audio} from 'expo-av';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const audioPaths = [
    require('../../../../assets/audio/niatSubuh.m4a'),
    require('../../../../assets/audio/NiatShalatZhuhur.m4a'),
    require('../../../../assets/audio/NiatShalatAshar.m4a'),
    require('../../../../assets/audio/NiatShalatMaghrib.m4a'),
    require('../../../../assets/audio/NiatShalatIsya.m4a'),
]


import {LoadAudio, PlayAudio, PauseAudio, StopAudio, UnloadAudio} from '../../../../utils/audioUtils';


function AudioLoadingButton() {

    return (
        
        <View style={styles.audioWrapper}>
            <TouchableOpacity
                
                style={{ backgroundColor: '#36cc00', padding: 6, borderRadius: 50 }}
            >
                <AntDesign name="loading1" size={18} color="white" />
            </TouchableOpacity>
        </View>
    )
}
function AudioPlayButton({audio, setIsPlaying}) {

    return (
        
        <View style={styles.audioWrapper}>
            <TouchableOpacity
                onPress={async ()=>{await PlayAudio(audio, setIsPlaying)}}
                style={{ backgroundColor: '#36cc00', padding: 6, borderRadius: 50 }}
            >
                <AntDesign name="caretright" size={18} color="white" />
            </TouchableOpacity>
        </View>
    )
}
function AudioPauseButton({audio, setIsPlaying}) {
    return (<View style={[styles.audioWrapper, { gap: 5 }]}>
        <TouchableOpacity
            title="Stop"
            onPress={ async () => {await StopAudio(audio, setIsPlaying)}}
            style={{ backgroundColor: 'red', padding: 6, borderRadius: 50 }}
        >
            <Entypo name="controller-stop" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
            title="Pause"
            onPress={ async ()=>{await PauseAudio(audio, setIsPlaying)}}
            style={{ backgroundColor: 'brown', padding: 6, borderRadius: 50 }}
        >
            <AntDesign name="pause" size={18} color="white" />
        </TouchableOpacity>
    </View>
    )
}



export default function page() {
    const [data, setData] = useState([]);
    const { id } = useLocalSearchParams();
    const dataShalat = shalatData.find((item) => item.id === id);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] =  useState(false);
    const [audio, setAudio] = useState(new Audio.Sound())

    const navigation = useNavigation();

    useEffect(()=>{
        const unsub = navigation.addListener('beforeRemove', (e)=>{
            if(isLoaded){
                UnloadAudio(audio);
            }
        })

        return unsub
    }, [navigation, isLoaded, isPlaying])

    useEffect(() => {
        const fetchData = async () => {
            setData(dataShalat);
            const audioRef = await LoadAudio(audioPaths[id-1], onPlaybackStatusUpdate, setIsLoaded);
            setAudio(audioRef);
        };

    
        fetchData();
    }, []);


    // playback status
    const onPlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            StopAudio(audio, setIsPlaying);
        }
        setIsPlaying(status.isPlaying);
        setIsLoaded(status.isLoaded);

    }

    return (
        <>
            <Stack.Screen options={{
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: '#924dbf'
            }} />
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../../../../assets/images/bgOpening.png')}
                    style={styles.bgOpening}
                >
                </ImageBackground>
             
                <ScrollView>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: '20%', }}>

                        <Text style={styles.text_atas}>Shalat {data.nama}</Text>



                        <View style={styles.cardWrapper}>

                            <TouchableOpacity style={styles.kartu} key={data.id}>
                                <Text style={styles.span}>Deskripsi</Text>
                                <Text style={styles.kartu_id}>{data.deskripsi}</Text>

                                <Text style={styles.span}>Waktu </Text>
                                <Text style={styles.kartu_id}>{data.waktu}</Text>


                                <Text style={styles.kartu_id}><Text style={styles.span}>Jumlah Rakaat:</Text> {data.jumlah_rakaat}</Text>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <Text style={styles.span}>Niat: </Text>
                                    {isLoaded ? (!isPlaying ? (<AudioPlayButton setIsPlaying={setIsPlaying} audio={audio} />) : (<AudioPauseButton setIsPlaying={setIsPlaying} audio={audio} />)) : <AudioLoadingButton />}


                                </View>
                                <Text style={styles.niat}>{data.Niat}</Text>

                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={{marginTop:10}}></View>
                    <Wajengan/>
                    <View style={{marginTop:10}}></View>
                    <Text style={styles.kartu_id}>@2023</Text>
                    <View style={{marginTop:10}}></View>
                </ScrollView>
            </SafeAreaView>
        </>
    )

}

const styles = StyleSheet.create({
    container: { marginTop: 0, top: 0, paddingTop: 0, width: '100%' },
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
        marginTop: '30%',
    },
    cardWrapper: {
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
    kartu_id: {
        color: "#000",
        fontSize: 18,
        // textAlign: 'center',
        fontFamily: 'poppins_regular',
        textAlign: 'justify'
    },
    span: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'poppins_bold',
        color: '#2c3e50'
    },
    text_atas: {
        fontSize: 40,
        // marginBottom: "40%",
        paddingBottom: 20,
        marginTop: 0,
        color: '#3f1651',
        fontWeight: '700'

    },
    audioWrapper: { flexDirection: 'row', gap: 5, width: '100%', paddingStart: 10 },
    niat: {
        fontSize: 24,
        fontFamily: 'poppins_regular',
        textAlign: 'right',
        marginBottom: 30,
        marginTop: 18
    },

})