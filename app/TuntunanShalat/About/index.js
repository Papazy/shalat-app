
import { Stack, useRouter, useNavigation } from 'expo-router'
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import Wajengan from '../../../assets/wajengan';

const jenisShalat = () => {
    const navigation = useNavigation();
    const handleButtonPress = () => {
        // Navigasi ke halaman 'Other'
        navigation.navigate('Fardhu');
    };
    const handleButtonPress2 = () => {
        // Navigasi ke halaman 'Other'
        navigation.navigate('Sunnah');
    };
    const ukuran = 120;
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerTransparent: true,
                    headerStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white'
                }}
            />
            <ImageBackground
                source={require('../../../assets/images/bgOpening.png')}
                style={styles.bgOpening}
            >
            </ImageBackground>
            <ScrollView style={{ minWidth: '100%' }}>
                <SafeAreaView style={styles.container}>

                    <View style={styles.card_main}>
                        <Text style={styles.text_atas}>SHALAT APP</Text>
                        <View>
                        <Text style={{ textAlign: 'left', color: '#fff', fontSize: 16, fontFamily: 'poppins_bold' }}>     Tentang</Text>
                            <Text style={{ textAlign: 'justify', color: '#fff', fontSize: 16, fontFamily: 'poppins_regular' }}>   Shalat App adalah aplikasi yang berisi informasi lengkap tentang tata cara shalat, mulai dari rukun shalat, jenis shalat, hingga praktek shalat.</Text>
                            <Text style={{ textAlign: 'justify', color: '#fff', fontSize: 16, fontFamily: 'poppins_regular', marginTop:10 }}> Aplikasi ini dilengkapi dengan pembahasan singkat yang mudah dipahami, serta dilengkapi dengan gambar dan video untuk mempermudah visualisasi. Aplikasi ini juga dilengkapi dengan fitur audio yang dapat membantu pengguna untuk menghafal bacaan shalat.</Text>
                        </View>
                        <Text style={{ textAlign: 'left', color: '#fff', fontSize: 16, fontFamily: 'poppins_bold', marginVertical:10 }}>     Develop by</Text>
                        <View style={{ justifyContent:'center', alignItems:'center', gap: 10}}>
                            <Image source={require('../../../assets/images/profile4.jpg')}  style={{borderRadius:10, width:150, height:150}}/>
                            <Text style={{ textAlign: 'justify', color: '#fff', fontSize: 20, fontFamily: 'poppins_bold_italic' }}>
                                Aulia Litunzira
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    )
}
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


export default jenisShalat;