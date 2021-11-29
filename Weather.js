import React from "react";
import propTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions={
    Rain:{
        iconName:"weather-rainy",
        gradient: ['#ad5389','#c471ed','#f64f59'],
        title:'На улице Дождик...',
        subtitle:'Без Зонтика лучше не выходить!',
    },
    Snow:{
        iconName:"snowflake",
        gradient: ['#12c2e9','#c471ed','#7303c0'],
        title:'На улице Снежок...',
        subtitle:'Одевайтесь потеплее, погнали играть в снежки!',

    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient: ['#4389A2','#c471ed','#f64f59'],
        title:'На улице Гроза...',
        subtitle:'Лучше поиграйте в настольные игры со своими близкими!',
    },
    Smoke:{
        iconName:"weather-windy",
        gradient: ['#12c2e9','#fdeff9','#f64f59'],
        title:'На улице Смог...',
        subtitle:'Оденьте очки Тепловизоры!',
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient: ['#12c2e9','#c471ed','#fdeff9'],
        title:'На улице Изморось...',
        subtitle:'fuNNypeople Always SmiLe',
    },
    Dust:{
        iconName:"weather-windy-variant",
        gradient: ['#fdeff9','#c471ed','#2F0743'],
        title:'На улице пыль...',
        subtitle:'Оденьте Маску + Очки!',
    },
    Haze:{
        iconName:"weather-hazy",
        gradient: ['#12c2e9','#2F0743','#f64f59'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',
    },
    Fog:{
        iconName:"weather-hazy",
        gradient: ['#2F0743','#c471ed','#f64f59'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',

    },
    Sand:{
        iconName:"weather-hazy",
        gradient: ['#12c2e9','#c471ed','#4389A2'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',

    },
    Ash:{
        iconName:"snow",
        gradient: ['#12c2e9','#4389A2','#f64f59'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',
    },
    Squall:{
        iconName:"snow",
        gradient: ['#4389A2','#c471ed','#4389A2'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',
    },
    Tornado:{
        iconName:"snow",
        gradient: ['#DA22FF','#c471ed','#f64f59'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',
    },
    Mist:{
        iconName:"weather-fog",
        gradient: ['#12c2e9','#DA22FF','#f64f59'],
        title:'На улице Туман...',
        subtitle:'Самое время выбежать и понаблюдать на всем происходящим!',
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ['#12c2e9','#c471ed','#DA22FF'],
        title:'На улице Солнечно...',
        subtitle:'Самое время выходить гулять!',
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ['#12c2e9','#c471ed','#2F80ED'],
        title:'На улице Облачно...',
        subtitle:'Поэтому особо не расстраивайтесь, всё будет хорошо!',
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

            <View style={{...styles.halfContainer, ...styles.textContainer, ...styles.footer,}}>
               <Text style={styles.title}>{weatherOptions[condition].title}</Text>
               <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
               <Text style={styles.footerA}> created by fuNNypeople Always SmiLe </Text>
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
    },
    title:{
        color:'white',
        fontSize:44,
        fontWeight:'300',
        marginBottom:10,
    },
    subtitle:{
        color:'white',
        fontWeight:'600',
        fontSize:24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    },
    footerA: {
        color:'black',
        fontSize:18,
        fontWeight:'800',
        alignItems: "flex-start",
     },

})