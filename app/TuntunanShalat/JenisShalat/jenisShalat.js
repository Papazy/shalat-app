
import { Stack, useRouter, useNavigation } from 'expo-router'
import { Text, Image, View, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
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
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle:"",
                    headerTransparent: true,
                    headerStyle:{
                        color:'white'
                    },
                    headerTintColor:'white'
                }}
            />
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../../../assets/images/bg_opening.png')}
                    style={styles.bg_opening}
                >
                </ImageBackground>
                <View style={styles.card_main}>
                    <Text style={styles.text_atas}>Jenis Shalat</Text>
                
                    <Wajengan />
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <TouchableOpacity onPress={ handleButtonPress} style={[styles.card, { marginRight: 20 }]} >
                                <Image source={require('../../../assets/images/jenisShalat.png')} />
                                <Text style= {styles.card_title}>Fardhu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ handleButtonPress2} style={[styles.card]} >
                                <Image source={require('../../../assets/images/jenisShalat.png')} />
                                <Text style= {styles.card_title}>Sunnah</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
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
        backgroundColor: '#165BAA',
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
    }
})


export default jenisShalat;