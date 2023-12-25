import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, Button, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation, Stack, useIsFocuse } from 'expo-router'
import { useIsFocused } from '@react-navigation/native';

import { Audio, Video, ResizeMode } from 'expo-av';
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const rukunData = require('../../../assets/shalat/praktik.json')


const audioPaths = [
    require("../../../assets/audio/niatSubuh.m4a"), // 1
    require("../../../assets/audio/takbir.m4a"), // 2
    require("../../../assets/audio/iftitah.m4a"), // 3
    require("../../../assets/audio/alfatihah.m4a"), // 4
    require("../../../assets/audio/suratpendek.m4a"), // 5
    require("../../../assets/audio/takbir.m4a"), // 6
    require("../../../assets/audio/rukuk.m4a"), // 7
    require("../../../assets/audio/bangunRukuk.m4a"), // 8
    require("../../../assets/audio/itidal.m4a"), // 9
    require("../../../assets/audio/takbir.m4a"), // 10
    require("../../../assets/audio/sujud.m4a"), // 11
    require("../../../assets/audio/takbir.m4a"), // 12
    require("../../../assets/audio/dudukSujud.m4a"), // 13
    require("../../../assets/audio/takbir.m4a"), // 14
    require("../../../assets/audio/sujud.m4a"),// 15
    require("../../../assets/audio/takbir.m4a"), // 16
    "", // !!! duduk tasyahud Awal 17
    "", // !!! duduk tasyahud Akhir 18
    require("../../../assets/audio/tasyahud.m4a"),// 19
    require("../../../assets/audio/shalawat.m4a"), // 20
    require("../../../assets/audio/salam.m4a"), // 21
];
const videoPaths = [
    require('../../../assets/video/1.mp4'),
    require('../../../assets/video/2.mp4'),
    require('../../../assets/video/3.mp4'),
    require('../../../assets/video/4.mp4'),
    require('../../../assets/video/5.mp4'),
    require('../../../assets/video/6.mp4'),
    require('../../../assets/video/7.mp4'),
    require('../../../assets/video/8.mp4'),
    require('../../../assets/video/9.mp4'),
    require('../../../assets/video/10.mp4'),
    require('../../../assets/video/11.mp4'),
    require('../../../assets/video/12.mp4'),
    require('../../../assets/video/13.mp4'),
    require('../../../assets/video/14.mp4'),
    require('../../../assets/video/15.mp4'),
    require('../../../assets/video/16.mp4'),
    require('../../../assets/video/17.mp4'),
    require('../../../assets/video/18.mp4'),
    require('../../../assets/video/19.mp4'),
    require('../../../assets/video/20.mp4'),
    require('../../../assets/video/21.mp4'),
];


export default function praktek() {
    const [videoState, setVideoPath] = useState('');
    const { id } = useLocalSearchParams();
    const data = rukunData.find((item) => item.id === id);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    const [status, setStatus] = React.useState({});
    const video = React.useRef(null);
    const [numberId, setNumberId] = useState(0);
    const [audio, setAudio] = useState(new Audio.Sound())

    // useEffect
    React.useEffect(() => {

        return () => {
            UnloadAudio();

        };
    }, [isFocused]);


    React.useEffect(() => {
        async function loadingAssets() {
            setVideoPath(videoPaths[id - 1]);
            await LoadAudio(audioPaths[id - 1]);
        }
        setNumberId(data.id);
        loadingAssets();
        console.log("ID : ")
        console.log(videoState)
    }, [id]);



    const [isPlaying, setIsPlaying] = useState(false);
    const [finish, setFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    // UTILS
    const onPlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            StopSound();
        }
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        setFinish(status.didJustFinish);
        setIsLoaded(status.isLoaded);

    }

    const LoadAudio = async (link) => {

        try {
            const { sound } = await Audio.Sound.createAsync(link, {}, onPlaybackStatusUpdate);
            setIsLoaded(true);
            setAudio(sound);
        } catch (error) {
            SetLoading(false);
        }

    };

    const PlayAudio = async () => {
        try {
            if (isLoaded) {
                if (isPlaying === false) {
                    await video.current.playAsync()
                    audio.playAsync();
                    setIsPlaying(true);
                }
            }
        } catch (error) { }
    };

    const PauseAudio = async () => {
        try {
            if (isLoaded) {
                await audio.pauseAsync();
                await video.current.pauseAsync();
                setIsPlaying(false);
            }
        } catch (error) { }
    };
    const StopSound = async () => {
        if (isLoaded) {
            await audio.stopAsync();
            await video.current.stopAsync();
            setIsPlaying(false);
        }
    };
    
    const UnloadAudio = async () => {
        try {
            if (isLoaded) {
                await audio.unloadAsync();
                await video.current.unloadAsync();
                SetLoaded(false);
                SetLoading(false);
            }
        } catch (error) {
        }
    }

    const [isPreloading, setIsPreloading] = React.useState(false);
    const [isShowTerjemahan, setIsShowTerjemahan] = React.useState(false);
    const toggleTerjemahan = () => {
        setIsShowTerjemahan(!isShowTerjemahan);
    }
    return (<>
        <Stack.Screen
            options={{
                headerTitle: data.nama,
                headerTransparent: false,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#1e2f97',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                headerTitleStyle: {
                    fontFamily: 'poppins_bold',
                }
            }}
        />
        <ScrollView>

            <View style={styles.center}>


                {isPreloading &&
                    <ActivityIndicator
                        animating
                        color={"gray"}
                        size="large"
                        style={{ flex: 1, position: "absolute", top: "50%", left: "45%" }}
                    />
                }
                <Video
                    ref={video}
                    style={styles.video}
                    source={videoPaths[id-1]}
                    onLoadStart={() => setIsPreloading(true)}
                    onReadyForDisplay={() => setIsPreloading(false)}
                    resizeMode={ResizeMode.COVER}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                {/* <View style={styles.buttons}>
                        <Button
                            title={status.isPlaying ? 'Pause' : 'Play'}
                            onPress={() =>
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                        />
                    </View> */}
                <View style={styles.kartu}>
                    {data.repetisi > 0 && (<>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>

                            <Text style={[styles.title_label, styles.title]}>Bacaan :</Text>
                            {!isPlaying ? (

                                <View style={styles.audioWrapper}>
                                    <TouchableOpacity
                                        onPress={PlayAudio}
                                        style={{ backgroundColor: '#36cc00', padding: 6, borderRadius: 50 }}
                                    >
                                        <AntDesign name="caretright" size={18} color="white" />
                                    </TouchableOpacity>
                                </View>
                            ) : (<View style={[styles.audioWrapper, { gap: 5 }]}>
                                <TouchableOpacity
                                    title="Stop"
                                    onPress={StopSound}
                                    style={{ backgroundColor: 'red', padding: 6, borderRadius: 50 }}
                                >
                                    <Entypo name="controller-stop" size={18} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    title="Pause"
                                    onPress={PauseAudio}
                                    style={{ backgroundColor: 'brown', padding: 6, borderRadius: 50 }}
                                >
                                    <AntDesign name="pause" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                            )}
                        </View>
                    </>)}
                    {data.repetisi > 0 && (
                        <>
                            <Text style={[styles.title_doa, styles.title]}>{data.doa}</Text>

                            <Text onPress={toggleTerjemahan} style={[styles.title_terjemah, styles.title, { fontWeight: 'bold' }]}>
                                {!isShowTerjemahan && (
                                    <Text style={[styles.title, { fontWeight: 'bold' }]}>
                                        Lihat Terjemahan </Text>)}
                                {isShowTerjemahan && (
                                    <Text style={[styles.title, { fontWeight: 'bold' }]}>
                                        Tutup Terjemahan </Text>)}
                            </Text>
                            {isShowTerjemahan && (
                                <Text style={[styles.title_terjemah, styles.title]}>{data.terjemahan}</Text>
                            )}
                            {data.repetisi > 1 && (
                                <Text style={[styles.title_repetisi, styles.title]}>Diulang sebanyak {data.repetisi}x</Text>
                            )}
                            {data.repetisi > 1 && (
                                <Text style={[styles.title_repetisi, styles.title]}>Diulang sebanyak {data.repetisi}x</Text>
                            )}
                        </>
                    )}
                    {data.repetisi < 1 && (
                        <>
                            <Text style={[styles.title_label, styles.title]}>{data.nama}</Text>
                            <Text style={[styles.title_terjemah, styles.title]}>{data.doa}</Text>

                        </>
                    )}
                </View>

            </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
            {data.id > 1 && (
                <TouchableOpacity onPress={async () => { await UnloadAudio(); navigation.navigate("[id]", { id: data.id - 1 }) }} style={styles.button}>
                    <Text style={styles.textCenter}>Previous</Text>
                </TouchableOpacity>
            )}

            {data.id < 9 && (
                <TouchableOpacity onPress={async () => { await UnloadAudio(); navigation.navigate("[id]", { id: data.id + 1 }) }} style={styles.button}>
                    <Text style={styles.textCenter}>Next</Text>
                </TouchableOpacity>
            )}
        </View>

    </>)
}

const styles = StyleSheet.create({
    center: { flex: 5, alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'white' },
    kartu: {
        justifyContent: 'flex-start', backgroundColor: '#1e2f97', width: '100%', paddingVertical: 60, paddingHorizontal: 40, borderTopLeftRadius: 40, minHeight: 70, paddingBottom: 80,
        borderTopRightRadius: 40,
    },
    title: { color: 'white' },
    title_label: { fontSize: 20, fontWeight: 'bold', textAlign: 'left' },
    asset: { width: '100%', minHeight: 500 },
    audioWrapper: { flexDirection: 'row', gap: 5, width: '100%', paddingStart: 10 },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: '#1e2f97',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 30, // Adjust as needed
        paddingVertical: 16, // Adjust as needed
        borderTopWidth: 1,
        borderTopColor: '#fff',
        elevation: 10,
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: { height: 10 },

    },
    button: {
        backgroundColor: '#63c132', // Set your desired button color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '30%',
    },
    bottomButton: {
        marginTop: 'auto',
    },
    textCenter: {
        textAlign: 'center',
        color: 'white', // Set your desired text color
    },
    title_doa: {
        fontSize: 24,
        textAlign: 'right',
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 420,
    },
    title_repetisi: { fontSize: 14, fontFamily: 'poppins_bold', marginTop: 8 },
    title_terjemah: { textAlign: 'justify', fontSize: 16, fontFamily: 'poppins_regular', marginTop: 2 }

})






