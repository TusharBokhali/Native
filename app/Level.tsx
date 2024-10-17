import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

let is = 0;
function Level() {
  let [Data, setData] = useState([]);
  let [space, setspace] = useState([])
  let getItems = async () => {

    let object = await AsyncStorage.getItem("Data")
    let obj = JSON.parse(object)
    

    let spaces = await AsyncStorage.getItem("SKIP")
    let real = JSON.parse(spaces)
    setspace(real)
    setData(obj)
  }
  useEffect(() => {
    getItems()
  }, [])
  const navigation = useNavigation();
  let [up, setUp] = useState("")
  let dublicate = [];
  for (let i = 1; i <= 20; i++) {
    dublicate.push(i)
  }

  if(Data==null){
    let get = {Complate:'',Current:1}
    setData(get)
  }
  let [levele, setlevel] = useState(dublicate)
  let StartGame = (e) => {
 
    let see = Data !==null ? Data.Current :1;
    console.log(see);
    // console.log(see);
    
    if (e <= see) {
      let store = async (e) => {
        try {
          await AsyncStorage.setItem("Complate", e);
        } catch (error) {
          console.log(error)
        }
      };
      store(e);
      navigation.navigate("Start", { name: e});
    } else {
      alert("Level not Compalte!")
    }
  }
  return (
    <>
      <SafeAreaView style={style.container}>
        <View style={style.main}>
          <FontAwesome5 name="backward" size={24} color="white" style={style.Back} onPress={() => { navigation.navigate('index') }} />
          <View style={style.Content}>
            <Text style={style.Heading}>Level</Text>
              {/* <Text>{console.log( (Data.Current=='1'))}</Text> */}
            <View style={style.flex}>
              {
          
                levele.map((el, inx) => {
                  return (
                    <View key={inx}>
                      <Pressable style={(Data!==null && (Data.Current==el)) ? style.Pending : (space!==null ?   space.includes(el) :0) ? style.skip : ((Data !==null) && (Data.Complate!==undefined ) && (Data.Complate.includes(el))? style.active : style.button )  }>
                        <Text style={style.text} onPress={() => { StartGame(el) }}>{el}</Text>
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
  container: {
    flex: 1,
  },
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#302d2d',
  },
  Pending: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F7CB73',
    width: 50,
    height: 50,
    margin: 5,
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
  Back: {
    marginStart: 10,
    marginTop: 10,
  },
  active: {
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
  skip: {
    backgroundColor: '#0f9ebb',
    width: 50,
    height: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
  }
})