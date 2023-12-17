import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, Button, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation, Stack } from 'expo-router'
import { Audio, Video, ResizeMode } from 'expo-av';
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const rukunData = require('../../../assets/shalat/rukun.json')

export default function praktek() {
    const navigation = useNavigation();
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    const sound = React.useRef(new Audio.Sound());
    const [isPlaying, setIsPlaying] = useState(false);

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const doa = require('../../../assets/audio/Iftitah.m4a');

    React.useEffect(() => {
        LoadAudio();
        video.current.playAsync()
    }, []);

    const PlayAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === false) {
                    sound.current.playAsync();
                    setIsPlaying(true);
                }
            }
        } catch (error) { }
    };

    const PauseAudio = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === true) {
                    sound.current.pauseAsync();
                    setIsPlaying(false);
                }
            }
        } catch (error) { }
    };
    const StopSound = async () => {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === true) {
                    sound.current.stopAsync();
                    setIsPlaying(false);
                }
            }
        } catch (error) { }
    };
    const exitSound = async () => {
        try {
            sound.current.stopAsync();
            setIsPlaying(false);
        } catch (error) { }
    };
    const LoadAudio = async () => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
            try {
                const result = await sound.current.loadAsync(doa, {}, true);
                if (result.isLoaded === false) {
                    SetLoading(false);
                    console.log('Error in Loading Audio');
                } else {
                    SetLoading(false);
                    SetLoaded(true);
                }
            } catch (error) {
                console.log(error);
                SetLoading(false);
            }
        } else {
            SetLoading(false);
        }
    };


    const { id } = useLocalSearchParams();
    const data = rukunData.find((item) => item.id === id);
    const [isPreloading, setIsPreloading] = React.useState(false);
    return (<>
        <Stack.Screen
            options={{
                headerTitle: data.nama,
                headerTransparent: false,
                headerTintColor: '#fff',
                headerStyle: {  
                    backgroundColor:'#1e2f97',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems : 'center'
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
                            style={{ flex: 1, position:"absolute", top:"50%", left:"45%" }}
                        />
        }
                    <Video
                        ref={video}
                        style={styles.video}
                        source={require('../../../assets/video/Takbir.mp4')}
                        onLoadStart={() => setIsPreloading(true)}
                        onReadyForDisplay={() => setIsPreloading(false)}
                        resizeMode={ResizeMode.COVER}
                        isLooping
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
                    <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:"flex-start"}}>
                        
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
    
                        <Text style={[styles.title_label, styles.title]}>Terjemahan : </Text>
                        <Text style={[styles.title_terjemah, styles.title]}>{data.terjemahan}</Text>
                        {data.repetisi > 1 && (
                            <Text style={[styles.title_repetisi, styles.title]}>Diulang sebanyak {data.repetisi}x</Text>
                        )}
                        </>
                    ) }
                    {data.repetisi < 1 && (
                        <>
                        <Text style={[styles.title_label, styles.title]}>{data.nama}</Text>
                        <Text style={[styles.title_terjemah, styles.title]}>{data.doa}</Text>
                       
                        </>
                    ) }
                </View>

            </View>
        </ScrollView>
        <View style={styles.buttonWrapper}>
            {data.id > 1 && (
                <TouchableOpacity onPress={() => { exitSound(); navigation.navigate("[id]", { id: data.id - 1 }) }} style={styles.button}>
                    <Text style={styles.textCenter}>Previous</Text>
                </TouchableOpacity>
            )}

            {data.id < 9 && (
                <TouchableOpacity onPress={() => { exitSound(); navigation.navigate("[id]", { id: data.id + 1 }) }} style={styles.button}>
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
    audioWrapper: { flexDirection: 'row', gap: 5, width: '100%', paddingStart:10 },
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
        borderTopWidth:1,
        borderTopColor: '#fff',
        elevation:10,
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {height:10},

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
    title_repetisi : {fontSize: 14, fontFamily:'poppins_bold', marginTop: 8},
    title_terjemah : {textAlign:'justify', fontSize: 16, fontFamily:'poppins_regular', marginTop:2}

})