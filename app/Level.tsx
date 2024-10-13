import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

let is= 0;
function Level() {
  let [skips,setSkips] = useState([])
  let getItems = async()=>{
  let dub = [...skips]
    let skip = await AsyncStorage.getItem("Skip");
   dub[is++] = skip;
   setSkips(dub);
}

useEffect(()=>{
  getItems()
},[])

  const navigation = useNavigation();

  let [up, setUp] = useState("")

  let dublicate = [];
  for (let i = 1; i <= 20; i++) {
    dublicate.push(i)
  }
  let [levele, setlevel] = useState(dublicate)

  let ComplateData = async () => {
    try {
      let values = await AsyncStorage.getItem("Data")
      let fix = JSON.parse(values)
      setUp(fix+1)
    } catch (e) {
      console.log(e);
    }
  }
  ComplateData();
  let StartGame = (e) =>{
    if(e<=up)
    {
      let store = async (e) => {
          try {
            await AsyncStorage.setItem("Complate", e);
          } catch (error) {
            console.log(error)
          }
        };
      store(e);
      navigation.navigate("Start",{name:e});
    }else{
      alert("Level not Compalte!")
    }
  }
  // (skips.includes(el)) ? style.skip: (up >= el) ? style.active : style.button
  return (
    <>
    <SafeAreaView style={style.container}>
      <View style={style.main}>
      <FontAwesome5 name="backward" size={24} color="white" style={style.Back} onPress={()=>{navigation.navigate('index')}}/>
        <View style={style.Content}>
          <Text style={style.Heading}>Level</Text>
          <View style={style.flex}>
            {
              levele.map((el, inx) => {
                return (
                  <View key={inx}>
                    <Pressable style={(skips[el]!==null || skips[el]!=="") ? skips.includes(`${el}`) ? style.skip : (up>=el ? style.active : style.button):(up>=el ? style.active: style.button)}  >
                      <Text style={style.text} onPress={() => {StartGame(el)}}>{el}</Text>
                    </Pressable>
                  </View> 
                )
              })
            }
          </View>
        </View>
      </View>
              </SafeAreaView>
    </>
  )
}

export default Level

const style = StyleSheet.create({
  container:{
    flex:1,
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#302d2d',
  },
  Content: {
    width: '90%',
    height: '80%',
    margin: 'auto',
    paddingTop: 10,
  },
  Heading: {
    fontSize: 42,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#272727',
    width: 50,
    height: 50,
    margin: 5,
  },
  Back:{
    marginStart:10,
    marginTop:10,
  },
  active:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    width: 50,
    height: 50,
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  skip:{
    backgroundColor:'#0f9ebb',
    width: 50,
    height: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
  }
})