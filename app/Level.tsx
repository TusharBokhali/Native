import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
function Level() {

  
  const navigation = useNavigation();
  console.log(navigation);
-
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
  ComplateData()

  let StartGame = (e) =>{
    if(e<=up)
    {
      

      let store = async (e) => {
        try {
          await AsyncStorage.setItem("Complate", e)

        } catch (error) {
          console.log(error)
        }
      };
      store(e);
    }else{
      alert("Level not Compalte!")
    }
  }
  return (

    <>
      <View style={style.main}>
        <View style={style.Content}>
          <Text style={style.Heading}>Level</Text>
          <View style={style.flex}>
            {
              levele.map((el, inx) => {
                return (
                  <View key={inx}>
                    <Link href={{
                      pathname: "/Start",
                      params:{num:el}
                      }}>
                    <Pressable style={up >= el ? style.active:style.button}  >
                      <Text style={style.text} onPress={() => {StartGame(el)}}>{el}</Text>
                    </Pressable>
                    </Link>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    </>
  )
}

export default Level

const style = StyleSheet.create({
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
  }
})