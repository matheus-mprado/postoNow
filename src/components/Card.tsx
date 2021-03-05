import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Badge, IconButton, } from 'material-bread';
import { Image, Text, View } from 'react-native';

interface ICard{
    modalActive:Boolean;
}

export default function CardHome({modalActive}:ICard){
    return(
        <>
        {modalActive == true &&
        <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:'10%',maxHeight:192}}>
             <Card style={{borderRadius:15,width:'100%'}}>
                <CardMedia
                    image={
                        <Image
                            style={{flex:1,width:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}
                            source={{uri: 'https://www.sitawi.net/wp-content/uploads/2019/03/4k-wallpaper-close-up-dew-807598-2.jpg'}}
                        />
                    }
                    height={121}
                    title='teste'
                    titleStyles={{fontSize:24,fontWeight:'700'}}
                />
                <CardContent >
                    <View style={{position:'absolute',bottom:42,left:20}}>
                        <Image
                            style={{height:75,width:75,borderRadius:37.5,borderWidth:1,borderColor:"#fff"}}
                            source={{uri:'https://i.pinimg.com/originals/41/cb/eb/41cbeb1f39398395118b243c8dc12470.png'}}
                        />
                    </View>
                    <View style={{marginLeft:80,alignContent:'space-between'}}>
                        <Text style={{ color: '#222', fontSize: 14,fontWeight:'600',lineHeight:21,marginBottom:10 }}>
                            Salvamos você com gasolina
                        </Text>
                        <Text style={{ color: '#333', fontSize: 12,fontWeight:'400' }}>
                            Salvamos você com gasolina
                        </Text>
                    </View>
                    
                </CardContent>
            </Card>
        </View>
        }
        </>
    );
}