import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {  StyleSheet, Text, View } from 'react-native';


import Map from '../components/Map';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home(){

    const [token,setToken] = useState();

    const navigation = useNavigation();


    const singInApi = async () =>{

        const req = await fetch("https://warker-api.herokuapp.com/api/login",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "email":"marco@w16.com.br",
                "password":"w16front"
            })
        }).then((response) => response.json())

        if(req.token){
            await AsyncStorage.setItem('token', req.token);
            setToken(req.token);
            console.log(token);
        }
    }

    useEffect(()=>{
        singInApi();
    },[]);

    return(
        <View style={styles.container}>
            <Map/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
})