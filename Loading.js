import React from "react";
import { StyleSheet, Text, View,StatusBar} from 'react-native';

export default function Loading(){
    return(<View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Загружаюсь, пробую получить данные о погоде! немножко подождите...</Text>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        justifyContent:'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: 'black',
       },
    text:{
        color: '#9733EE',
        fontSize: 44,
    }
})