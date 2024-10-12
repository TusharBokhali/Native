import { View, Text , StyleSheet,Pressable , Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Link } from 'expo-router';
import { useNavigation, useRoute } from '@react-navigation/native';
import Win from '../assets/images/LevelWinsori-removebg-preview.png'

export default function nextCenter() {
  const navigation = useNavigation();
  return (
  
     <SafeAreaView style={styles.container}>
        <View style={styles.cont}>
            <View>
            <Image source={Win} style={styles.imgaes}/>
            </View>
            <View style={styles.flex}>
            <View>
                    <Pressable style={styles.button} onPress={()=>{navigation.navigate("index")}}> 
                        <Text style={styles.Text}>Back</Text>
                    </Pressable>
            </View>
            <View>
                <Pressable style={styles.button} onPress={()=>{navigation.navigate('Start')}}>    
                    <Text style={styles.Text}>Next</Text>
                </Pressable>
            
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