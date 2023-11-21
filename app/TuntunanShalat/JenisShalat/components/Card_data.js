import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
const Card_data = (props) =>{
    return (
        <>
            
            <View style={styles.container}>
                <Text style={styles.title}>{props.nama}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        color:'#fff'
    }
})

export default Card_data;