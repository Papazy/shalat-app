import { Text,View, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import {useNavigation, Stack} from 'expo-router'

import { useLocalSearchParams } from "expo-router";

const rukunData = require('../../../assets/shalat/rukun.json')

export default function rukun(){
    const navigation = useNavigation();    



    const {id} = useLocalSearchParams();
    const data = rukunData.find((item) => item.id === id);
    return (<>
        <Stack.Screen
      options={{
        headerTitle: "",
        headerTransparent: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
        headerStyleInterpolator: HeaderStyleInterpolators.forFade,
      }}
    >
        <View style={styles.center}>

            <View style={styles.center}>
                <Image source={require('../../../assets/images/orangshalat.png')} />
            </View>
            <View style={styles.kartu}>
                <Text style={[styles.title_id, styles.title]}>id : {data.id}</Text>
                <Text style={[styles.title_nama, styles.title]}>{data.nama}</Text>
                <Text style={[styles.title_doa, styles.title]}>Bacaan : {data.doa}</Text>
                <Text style={[styles.title_terjemah, styles.title]}>Terjemahan : {data.terjemahan}</Text>
                {data.repetisi > 1 && (
                    <Text style={[styles.title_repetisi, styles.title]}>Diulang sebanyak : {data.repetisi}</Text>
                )}
            </View>
                
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("[id]", {id: data.id-1})}} style={styles.button}>
                        <Text style={styles.textCenter}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate("[id]", {id: data.id+1})}} style={styles.button}>
                        <Text style={styles.textCenter}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </Stack.Screen>
    </>)
} 

const styles = StyleSheet.create({
    center : {flex: 5, alignItems:'center', justifyContent:'center', width: '100%'},
    kartu : {justifyContent:'flex-start',alignItems:'center', backgroundColor:'purple',width: '100%', paddingVertical:20},
    title: {color: 'white'},
    buttonWrapper:{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'center', gap:20, backgroundColor:'purple', width:'100%'},
    button: {width:120, paddingVertical: 10, borderRadius:3, backgroundColor: 'green', elevation: 3,
                shadowColor: '#fff', // Warna bayangan
                shadowOffset: { width: 2, height: 2 }, // Pengaturan posisi bayangan
                shadowOpacity: 0.3, // Tingkat transparansi bayangan
                shadowRadius: 5, // Radius bayangan    
            },
    textCenter:{textAlign:'center'}
})