import React from "react";
import propTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions={
    Rain:{
        iconName:"weather-rainy",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Snow:{
        iconName:"snowflake",
        gradient: ['#12c2e9','#c471ed','#f64f59'],

    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Smoke:{
        iconName:"weather-windy",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Dust:{
        iconName:"weather-windy-variant",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Haze:{
        iconName:"weather-hazy",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Fog:{
        iconName:"weather-hazy",
        gradient: ['#12c2e9','#c471ed','#f64f59'],

    },
    Sand:{
        iconName:"weather-hazy",
        gradient: ['#12c2e9','#c471ed','#f64f59'],

    },
    Ash:{
        iconName:"snow",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Squall:{
        iconName:"snow",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Tornado:{
        iconName:"snow",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Mist:{
        iconName:"weather-fog",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ['#12c2e9','#c471ed','#f64f59'],
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ['#12c2e9','#c471ed','#2F80ED'],
    },

}

export default function Weather({temp,condition}){
    return (
        <LinearGradient 
        colors={weatherOptions[condition].gradient} 
        style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96}  color='white' />
                <Text style={styles.temp}>{temp}°</Text>
            </View>

            <View style={styles.halfContainer}>
               <Text>Сделано</Text>
               <Text>Андрюхой fuNNypeople</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes ={
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(['Thunderstorm','Drizzle','Rain','Snow','Dust', 'Smoke', 'Haze', 'Fog','Sand' , 'Ash','Squall','Tornado','Mist','Clear','Clouds']).isRequired,
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    temp:{
        fontSize:42,
        color:'white',
    }
})