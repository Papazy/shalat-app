import { Text,View, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import {useNavigation, Stack} from 'expo-router'
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

const rukunData = require('../../../assets/shalat/rukun.json')

export default function rukun(){

    const [isShowTerjemahan, setIsShowTerjemahan] = useState(false);
    const toggleTerjemahan = () => {
        setIsShowTerjemahan(!isShowTerjemahan);
    }


    const navigation = useNavigation();    
    const {id} = useLocalSearchParams();
    const data = rukunData.find((item) => item.id === id);
    const title = data.nama;
    return (<>
        <Stack.Screen
      options={{
        headerTitle: title,
        headerTransparent: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        headerStyle:{
            color: 'white',
            textAlign: 'center',
        },
        headerTitleStyle:{
            flex: 1,
      textAlign: 'center',
      alignSelf: 'center',
        },
        headerTintColor: 'white',
      }}
    />
        <View style={[styles.center, styles.background]}>
            
            <View style={styles.kartu}>
                <Text style={[styles.title_doa]}>{data.doa}</Text> 
                <Text onPress={toggleTerjemahan} style={[styles.title_terjemah, styles.title, {fontWeight: 'bold'}]}>
                    {!isShowTerjemahan &&(
                    <Text style={[styles.title_terjemah, styles.title, {fontWeight:'bold'}]}>
                        Lihat</Text>)} 
                    {isShowTerjemahan &&(
                    <Text style={[styles.title_terjemah, styles.title, {fontWeight:'bold'}]}>
                        Tutup</Text>)} 
                Terjemahan</Text>
                {isShowTerjemahan &&(
                    <Text style={[styles.title_terjemah, styles.title]}>"{data.terjemahan}"</Text>
                )}
            </View>
                
                <View style={styles.buttonWrapper}>
                    {data.id > 1 && (
                        <TouchableOpacity onPress={()=>{navigation.navigate("[id]", {id: data.id-1})}} style={styles.button}>
                            <Text style={[styles.textCenter, styles.buttonTitle]}>Previous</Text>
                        </TouchableOpacity>
                    )}

                    {data.id < 9 && (
                        <TouchableOpacity onPress={()=>{navigation.navigate("[id]", {id: data.id+1})}} style={styles.button}>
                            <Text style={[styles.textCenter, styles.buttonTitle]}>Next</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
           
    </>)
} 

const styles = StyleSheet.create({
    background:{backgroundColor: '#6375D4'},
    center : {flex:1, alignItems:'center', justifyContent:'center'},
    kartu : {backgroundColor: '#6345D4', padding: 20, borderRadius: 10, width: '100%', marginBottom: 20},
    title: {color: 'white', fontSize: 14,},
    buttonWrapper:{flexDirection:'row', justifyContent:'space-between', width:'100%', paddingHorizontal: 20, paddingVertical: 20},
    button: {backgroundColor: '#6345D4', padding: 10, borderRadius: 10, width: '40%'},
    textCenter:{textAlign:'center'},
    buttonTitle:{color: 'white', fontSize: 20, fontWeight: 'bold'},
    title_doa: {fontSize: 20, fontWeight: 'bold', color: 'white', textAlign:'center', padding: 20},
    title_nama:{fontSize: 30, fontWeight: 'bold', color: 'white', textAlign:'center', padding: 20, marginBottom:40},
})