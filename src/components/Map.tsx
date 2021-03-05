
import { Button, Icon, Searchbar } from "material-bread"
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native"
import MapView, { Marker, AnimatedRegion, MapViewAnimated } from "react-native-maps"
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from 'expo-location';

import CardHome from "./Card";

interface ICoordsData{
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
}


export default function Map(){

    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [coords,setCoords] = useState<ICoordsData>();
    const [errorMsg, setErrorMsg] = useState('');

    const [modalActive,setModalActive] = useState(false);

    function handleClickPosto(){
        setModalActive(!modalActive);
        getPostosApi();
    }

    const getPostosApi = async () =>{
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`https://warker-api.herokuapp.com/api/posto`,{
            headers:{
                "Accept": "application/json"
            }
        })
        .then(res=>{return res.json()})
        .catch(err => {console.log('error',err)});

        console.log(req);
    }

    useEffect(()=>{
        
        (async () =>{
            let {status} = await Location.requestPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg("Permission to access locatin was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy:Location.Accuracy.Highest
            });
            
            setLocation(location);
            setCoords(location.coords);
        })();

    },[]);

    let text = 'Aguardando..';

    if(errorMsg){
        text = errorMsg;
    }else if(location){
        text = JSON.stringify(coords)
    }   

    return(
        <View style={StyleSheet.absoluteFillObject}>

        
            {coords && 
                <MapView 
                    style={StyleSheet.absoluteFillObject} 
                    region={{
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }}
                >
                    <Marker coordinate={{ latitude : coords.latitude , longitude : coords.longitude }}>
                        <Icon name="location-pin" color="#CA5501" style={{fontSize:50}} />
                    </Marker>
                </MapView> 

            }
            <View style={styles.contentView}>
                <Searchbar/>

                

                <View>
                    <CardHome modalActive={modalActive} />
                
                    <Button 
                        style={styles.btnActiveSearch}
                        text={'Estou com sede!'} 
                        type={'contained'}
                        fullWidth={true}
                        icon={<Icon name="local-gas-station" />}
                        useInputCasing={true}
                        onPress={handleClickPosto}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      contentView:{
        flex:1,
        width:'100%',
        paddingTop:34,
        paddingBottom:32,
        paddingHorizontal:30,
        alignItems:'center',
        justifyContent:'space-between',
      },
      btnActiveSearch:{
        backgroundColor:'#CA5501',
        height:50,       
        borderRadius:10,
        textTransform:"capitalize",
        fontSize:16,
        width:'100%'
      }
})