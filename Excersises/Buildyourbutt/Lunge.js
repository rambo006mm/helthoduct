import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    ViewPagerAndroid,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    TextInput
} from 'react-native';
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";




export default class Lunge extends Component{
    static navigationOptions = {
        title: 'HELTHODUCT',
        headerStyle: { Color: 'red',
            backgroundColor: '#3C3C3C',
            borderBottomColor: '#3C3C3C',



        },
        headerTitleStyle: { color: '#ABABAB',fontFamily:'Roboto',right:0,
            marginLeft:'auto',


            fontSize:25},
    }
    constructor()
    {
        super()
        this.state={
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '30',
            startDisable: false,
            resetDisable:false,
            stopDisable:false
        }
    }


    render(){
        return(

            <View style={{backgroundColor: '#f1f1f1',height:'100%',}}>
                <View style={{width:'100%',height:'42%'}}>
                    <Image
                        source={require('../gifs/Lunge.gif')}
                        style={{width: undefined,height:undefined,flex:1}}
                    />
                </View>
                <Text style={{textAlign:'center',fontSize:25,color:'#ABABAB'}}>Lunge</Text>
                <View style={{width:'80%',height:1,margin:5,backgroundColor:'#ADA9B0',justifyContent:"center",alignItems:'center',alignSelf:"center"}}></View>
                <ScrollView contentContainerStyle={{flexGrow:1 }} enableOnAndroid={true}>

                    <View style={{flex:1,flexDirection:'row'}}>



                        <View style={{flexDirection:'column',backgroundColor:'#f1f1f1',height:'100%',width:'100%'}}>


                            <View style={{backgroundColor:'#fff',width:'95%',height:230,flexDirection:'row',flex:1,margin:5,borderRadius:15,justifyContent:'center',alignSelf:'center'}}>
                                <View style={{backgroundColor:'#fff',flex:.5,margin:10,flexDirection:'column'}}>
                                    <Text style={{textAlign: 'center',fontSize:18,fontWeight: 'bold',margin:5,color:'#ABABAB'}}>Primary</Text>
                                    <Text style={{textAlign: 'center',fontSize:18,margin:5,color:'#ABABAB'}}>External oblique</Text>
                                    <Image
                                        source={require('../detailimage/LungePri.png')}
                                        style={{width: undefined,height:undefined,padding:15,flex:1}}
                                    />
                                </View>
                                <View style={{backgroundColor:'#fff',flex:.5,margin:10,flexDirection:'column'}}>
                                    <Text style={{textAlign: 'center',fontSize:18,fontWeight: 'bold',margin:5,color:'#ABABAB'}}>Secondary</Text>
                                    <Text style={{textAlign: 'center',fontSize:18,margin:5,color:'#ABABAB'}}>Glute medius</Text>
                                    <Image
                                        source={require('../detailimage/LungeSec.png')}
                                        style={{width: undefined,height:undefined,padding:15,flex:1}}
                                    />
                                </View>
                            </View>



                            <View style={{flexDirection:'column',backgroundColor:'#f1f1f1',height:400,width:'100%'}}>


                                <View style={{backgroundColor:'#fff',width:'95%',height:230,flexDirection:'column',flex:1,margin:5,borderRadius:15,justifyContent:'center',alignSelf:'center'}}>
                                    <View style={{backgroundColor:'#fff',flex:1,margin:10,flexDirection:'column'}}>
                                        <Text style={{textAlign: 'left',fontSize:25,margin:5,color:'#ABABAB'}}>Lunge</Text>
                                        <Text style={{textAlign: 'left',fontSize:18,margin:5,color:'#ABABAB',fontWeight:'bold'}}>Body Part: Calf</Text>
                                        <Text style={{textAlign: 'left',fontSize:18,margin:5,color:'#ABABAB',fontWeight:'bold'}}>Discription</Text>

                                        <Text style={{textAlign: 'left',marginLeft:'2%',marginBottom:5,color:'#ABABAB'}}>{'\u2B24'} Stand tall with feet hip-width apart.</Text>
                                        <Text style={{textAlign: 'left',marginLeft:'2%',marginBottom:5,color:'#ABABAB'}}>{'\u2B24'} Take a big step forward with right leg. Start to shift your weight forward so heel hits the floor first.</Text>
                                        <Text style={{textAlign: 'left',marginLeft:'2%',marginBottom:5,color:'#ABABAB'}}>{'\u2B24'} Lower your body until right thigh is parallel to the floor and right shin is vertical. It’s OK if knee shifts forward a little as long as it doesn’t go past right toe. </Text>
                                        <Text style={{textAlign: 'left',marginLeft:'2%',marginBottom:5,color:'#ABABAB'}}>{'\u2B24'} Press into right heel to drive back up to starting position. </Text>
                                    </View>

                                </View>
                            </View>

                        </View>












                    </View>

                </ScrollView>


            </View>







        )
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '30%',
        paddingTop:8,
        paddingBottom:8,
        borderRadius:7,
        margin:5
    },
    buttonText:{
        color:'#ABABAB',
        textAlign:'center',
        fontSize: 20,width:'100%'
    },
    counterText:{

        fontSize: 25,
        color: '#ABABAB',
        right:5,
        marginLeft:'auto'
    }
});