import { Text, View, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import Level1 from '../assets/images/Level1.webp'
import Level2 from '../assets/images/Level2.webp'
import Level3 from '../assets/images/Level3.webp'
import Level4 from '../assets/images/Level4.png'
import Level5 from '../assets/images/Level5.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
let val = '';
function Start() {
  let fix
  let [value, setvalue] = useState('');
  let [LVL, setLVL] = useState("")

  let gets = async () => {
    try {
      let values = await AsyncStorage.getItem("Complate")

      fix = await JSON.parse(values);
      fix = fix === undefined || '' ? 0 : fix;

    } catch (e) {
      console.log(e);
    }
  }
  gets()
  let [I, setI] = useState(fix);


  let LevelImages = [
    { Url: Level1, Ans: '59119', Level: 'Level 1' },
    { Url: Level2, Ans: '12', Level: 'Level 2' },
    { Url: Level3, Ans: '13111714', Level: 'Level 3' },
    { Url: Level4, Ans: '6', Level: 'Level 4' },
    { Url: Level5, Ans: '941', Level: 'Level 5' },
  ]

  let ValueSet = (el) => {
    val += el;
    setvalue(val)
  }

  let cleaner = () => {
    val = '';
    setvalue("")
  }

  let Enter = () => {
    if (value === LevelImages[I].Ans) {
      setI(I + 1)
      let data = I + 1;
      let store = async (datas) => {
        try {
          await AsyncStorage.setItem("Data", datas)
        } catch (error) {
          console.log(error)
        }
      };

      console.log(store(data))

      alert("Level Complate!");
    } else {
      alert("Answer Is Wrong!!")
    }
    val = '';
    setvalue("")
  }

  return (
    <>
      <View style={style.main}>
        <View style={style.Content}>
          <View style={style.Descri}>
            <View style={style.member}>
              <View style={style.seen}>
                <View>
                  <Text style={style.headers}>{LevelImages[I].Level}</Text>
                </View>
                <View style={style.center}>
                  <Image source={LevelImages[I].Url} style={style.img} />
                </View>
                <View>

                </View>
              </View>
              <View style={style.input}>
                <TextInput style={style.inputs} placeholder='Enter' keyboardType="numeric" value={value} />
                <View style={style.fixContent}>
                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('9') }}>9</Text>
                  </Pressable>

                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('8') }}>8</Text>
                  </Pressable>


                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('7') }}>7</Text>
                  </Pressable>

                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('6') }}>6</Text>
                  </Pressable>

                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('5') }}>5</Text>
                  </Pressable>
                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('4') }}>4</Text>
                  </Pressable>
                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('3') }}>3</Text>
                  </Pressable>
                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('2') }}>2</Text>
                  </Pressable>
                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('1') }}>1</Text>
                  </Pressable>
                  <Pressable >
                    <Text style={style.Buttons} onPress={() => { ValueSet('0') }}>0</Text>
                  </Pressable>
                  <Pressable >
                    <Text style={style.icons} onPress={cleaner}>
                      <Ionicons name="close" size={24} color="white" />
                    </Text>
                  </Pressable>
                  <Pressable>
                    <Text style={style.icons}>
                      <AntDesign name="enter" size={24} color="white" onPress={Enter} />
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default Start

const style = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#413f3f'
  },
  Content: {
    width: '90%',
    height: '90%',
    margin: 'auto',
  },
  Descri: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  member: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  seen: {
    width: '100%',
    height: '50%',
  },
  input: {
    width: '100%',
    height: '50%',
  },
  inputs: {
    width: '100%',
    borderRadius: 10,
    marginHorizontal: 'auto',
    padding: 8,
    color: 'white',
    fontSize: 20,
    shadowColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.56,
    shadowRadius: 5
  },
  fixContent: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    marginTop: 20,
  },
  Buttons: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    margin: 5,
    paddingHorizontal: 22,
    color: 'white',
    fontSize: 26,
    alignContent: 'center',
    borderRadius: 10,
  },
  icons: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    margin: 5,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 22,
    alignContent: 'center',
    borderRadius: 10,
  },
  headers: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white'
  },
  center: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  img: {
    width: 200,
    height: 200,
    marginHorizontal: 'auto',
    resizeMode: 'stretch',
  }
})