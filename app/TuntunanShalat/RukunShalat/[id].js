import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { useNavigation, Stack } from 'expo-router'
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

const rukunData = require('../../../assets/shalat/rukun.json')

export default function rukun() {

    const [isShowTerjemahan, setIsShowTerjemahan] = useState(false);
    const toggleTerjemahan = () => {
        setIsShowTerjemahan(!isShowTerjemahan);
    }


    const navigation = useNavigation();
    const { id } = useLocalSearchParams();
    const data = rukunData.find((item) => item.id === id);
    const title = data.nama;
    return (<>
        <Stack.Screen
            options={{
                headerTitle: title,
                headerTransparent: false,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress,
                    },
                }),
                headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                headerStyle: {
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'blue',
                },
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    alignSelf: 'center',
                },
                headerTintColor: 'white',
            }}
        />
            <ImageBackground
                source={require('../../../assets/images/bgOpening.png')}
                style={styles.bgOpening}
            >
            </ImageBackground>
            <ScrollView style={{width:'100%', height:'100%', paddingTop:"10%", }}>
        <View style={[styles.center, styles.background, {marginBottom:100}]}>

                <View style={styles.kartu}>
                    <Text style={[styles.title_doa]}>{data.doa}</Text>
                    <Text onPress={toggleTerjemahan} style={[styles.title_terjemah, styles.title, { fontWeight: 'bold' }]}>
                        {!isShowTerjemahan && (
                            <Text style={[ styles.title, { fontWeight: 'bold' }]}>
                                Lihat Terjemahan </Text>)}
                        {isShowTerjemahan && (
                            <Text style={[ styles.title, { fontWeight: 'bold' }]}>
                                Tutup Terjemahan </Text>)}
                    </Text>
                    {isShowTerjemahan && (
                        <Text style={[styles.title_terjemah]}>"{data.terjemahan}"</Text>
                    )}
                </View>
        </View>
            </ScrollView >

        <View style={styles.buttonWrapper}>
            {data.id > 1 && (
                <TouchableOpacity onPress={() => { navigation.navigate("[id]", { id: data.id - 1 }) }} style={styles.button}>
                    <Text style={[styles.textCenter, styles.buttonTitle]}>Previous</Text>
                </TouchableOpacity>
            )}

            {data.id < 9 && (
                <TouchableOpacity onPress={() => { navigation.navigate("[id]", { id: data.id + 1 }) }} style={styles.button}>
                    <Text style={[styles.textCenter, styles.buttonTitle]}>Next</Text>
                </TouchableOpacity>
            )}
        </View>

    </>)
}

const styles = StyleSheet.create({
    center: { flex: 1,padding: 20, alignItems: 'center', justifyContent: 'center', width: '100%',  },
    bgOpening: {
        position: 'absolute',
        height: '120%',
        width: '120%',
        top: -100
    },
    kartu: { backgroundColor: '#6345D4', padding: 20, borderRadius: 10, width: '100%', marginBottom: 20 },
    title: { color: 'white', fontSize: 14, },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: '#1e2f97',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%', paddingHorizontal: 20, paddingVertical: 20
    },
    button: { backgroundColor: '#6345D4', padding: 10, borderRadius: 10, width: '40%' },
    textCenter: { textAlign: 'center' },
    buttonTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    title_doa: { fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'right', padding: 20 },
    title_nama: { fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 20, marginBottom: 40 },
    title_terjemah :{ fontSize: 18, textAlign: 'justify', color: 'white',  fontFamily: 'poppins_regular' },
})  