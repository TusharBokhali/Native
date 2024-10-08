import { View, Text, StyleSheet  ,Image,Pressable } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import Cong from '../assets/images/Cong.gif'

export default function Congration() {
  return (
    <SafeAreaView style={styles.content}>
        <View style={styles.views}>
        <Image source={Cong}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
    },
    views:{
        width:'80%',
        height:'80%',
        textAlign:'center',
        alignItems:'center'
    }
})