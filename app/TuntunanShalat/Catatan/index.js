import { View, Text, TextInput, Button } from "react-native"
import {useNavigation, Stack} from 'expo-router'
import { ScrollView } from "react-native"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function index(){
    const [text, setText] = useState("");
    const [textAwal, setTextAwal] = useState("");
    const navigation = useNavigation();
    
    const updatedText = (textUpdate) => {
      setText(textUpdate);
    };
  
    const saveToCatatanJSON = async () => {
      try {
        // Menyimpan data catatan ke AsyncStorage
        await AsyncStorage.setItem("catatan", text);
      } catch (error) {
        alert("Gagal menyimpan catatan");
        console.error(error);
      }
    };
  
    const getCatatan = async () => {
      try {
        // Mengambil data catatan dari AsyncStorage
        const catatan = await AsyncStorage.getItem("catatan");
        if (catatan !== null) {
          setText(catatan);
        }
      } catch (error) {
        alert("Gagal mengambil catatan");
        console.error(error);
      }
    };

    useEffect(() => {
      // Mengambil data catatan dari AsyncStorage saat komponen dimuat
      getCatatan();
    }, []);

    return(
        <>
        <Stack.Screen 
            options={{  
              headerTitle: "Catatan",
              headerTransparent: false,
              headerRight: () => <Button onPress={saveToCatatanJSON} title="Simpan" />,
              headerStyle:{
                backgroundColor: '#5400CF'
              },
              headerTintColor: '#fff',
              
            }}
            />
        <View style={{flex: 1,
		backgroundColor: "",
		color: "white",
		padding:10,
    }}>
            <TextInput
                editable
                multiline={true}
				        autoFocus
                style={{ fontSize: 20, fontFamily:'Roboto'  }}
                onChangeText={text => updatedText(text)}
                value={text}
                />
        </View>
        </>
    )
}