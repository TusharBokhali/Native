import { View, Text, StyleSheet  ,Image,Pressable,ImageBackground } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import Cong from '../assets/images/Cong.gif'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Link, useNavigation, useRoute } from '@react-navigation/native';



export default function Congration() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.content}>
        <View style={styles.flexs}>
              <FontAwesome5 name="backward" size={24} color="white" onPress={() => { navigation.navigate('index') }
              } />
              
            </View>
        <View style={styles.views}>
        <Image style={styles.Images} source={Cong}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor:'#413f3f'
    },
    views:{
        width:'100%',
        height:'100%',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto'
    },
    Images:{
        width:'80%',
        resizeMode:'stretch',
    },
    flexs: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 10,
    },
 
})