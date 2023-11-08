import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";

const Item = ({ item }) => {
    return (

        <>
        <View style={styles.container}>
            <Image source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png` }}
                style={{ width: 64, height: 64, borderWidth:1, borderColor:'green', borderRadius: 50, }}
            />
            <View style={styles.texts}>
                <Text style={{color: '#00ee00', fontSize: 17,}}>{item.symbol}</Text>
                <Text style={{color:'white'}}>{item.name}</Text>
                <Text style={{color:'white'}}>{item.quote.USD.price}$</Text>
            </View>
        </View>
        <View style={styles.divider}></View>
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal: 16,
        paddingVertical:12,
        alignItems:"center",
        top: 42,
        backgroundColor:'#0d0032',
    },
    texts:{
        marginStart:16,
    },
    divider:{
        flex:1,
        height:0.4,
        backgroundColor: 'white',
        marginStart: 96,
        top: 42,
    }
});

export default Item;