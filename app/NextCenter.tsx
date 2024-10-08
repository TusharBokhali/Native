import { View, Text , StyleSheet,Pressable , Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Link } from 'expo-router';
import Win from '../assets/images/LevelWinsori-removebg-preview.png'

export default function nextCenter() {
  return (
  
     <SafeAreaView style={styles.container}>
        <View style={styles.cont}>
            <View>
            <Image source={Win} style={styles.imgaes}/>
            </View>
            <View style={styles.flex}>

            <View>
                <Link href={"/"}>
                    <Pressable style={styles.button}>
                        <Text style={styles.Text}>Back</Text>
                    </Pressable>
                </Link>
            </View>
            <View>
            <Link href={"/Start"}>
                <Pressable style={styles.button}>    
                    <Text style={styles.Text}>Next</Text>
                </Pressable>
            </Link>
            
            </View>
            </View>
        </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cont:{
        width:'100%',
        height:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#5a4e4e',
        // flexDirection:'row',
        marginHorizontal:'auto',
    },
    imgaes:{
        width:200,
        height:200,
    },
    flex:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    Text:{
        color:'white',
        fontSize:18,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        width: '110%',
        marginTop: 15,
      },

})