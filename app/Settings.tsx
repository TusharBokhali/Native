import { StyleSheet, Text, View , TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
    const navigation = useNavigation();

    let Reset = () =>{
        (async ()=>{
            let per = confirm("Game Reset Sure!");
            if(per)
                {
                try{
                    AsyncStorage.clear(); 
                    alert("Game Success Fully Reset!");
                }catch(e){
                    console.log(e);   
                }
            }else{
                alert("Game Not Reset!")
            }
        })();
    }
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
        <FontAwesome5 name="backward" size={24} color="white" onPress={()=>{navigation.navigate('index')}}/>

        <View style={styles.main}>
            <View>
            <Text style={styles.More}>Math Puzzle</Text>
            <Text style={styles.Small}>Settings</Text>
            </View>
            <View style={styles.content}>
                    <TouchableOpacity style={styles.button} onPress={Reset}>
                            <Text style={styles.text}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                            <Text style={styles.text}>Privacy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('About')}}>
                            <Text style={styles.text}>About</Text>
                    </TouchableOpacity>
            </View>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        width:'100%',
        height:'100%',
        backgroundColor:'#444343',
        padding:20,
    },
    main:{
        width:'100%',
        height:'60%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:50,
    },
    content:{
        width:'70%',
    },

      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        width: '100%',
        margin:'auto',
        marginTop: 15,
        
      },
      text: {
        textAlign: 'center',
        width: 100,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      More:{
        fontSize:28,
        color:'white',
      },
      Small:{
        textAlign:'center',
        color:'white',
        fontSize:22,
        marginTop:5,
      }
})