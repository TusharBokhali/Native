import { Text, View, StyleSheet, Pressable, TextInput, Image, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import p1 from '@/assets/images/p1.png'
import p2 from '@/assets/images/p2.png'
import p3 from '@/assets/images/p3.png'
import p4 from '@/assets/images/p4.png'
import p5 from '@/assets/images/p5.png'
import p6 from '@/assets/images/p6.png'
import p7 from '@/assets/images/p7.png'
import p8 from '@/assets/images/p8.png'
import p9 from '@/assets/images/p9.png'
import p10 from '@/assets/images/p10.png'
import p11 from '@/assets/images/p11.png'
import p12 from '@/assets/images/p12.png'
import p13 from '@/assets/images/p13.png'
import p14 from '@/assets/images/p14.png'
import p15 from '@/assets/images/p15.png'
import p16 from '@/assets/images/p16.png'
import p17 from '@/assets/images/p17.png'
import p18 from '@/assets/images/p18.png'
import p19 from '@/assets/images/p19.png'
import p20 from '@/assets/images/p20.png'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Back from '../assets/images/gameplaybackground.jpg'
import { useNavigation, useRoute } from '@react-navigation/native';
import LVLLABEL from '../assets/images/level_board.png'
import { Routes } from 'react-router-dom';
import { SafeAreaView } from 'react-native-safe-area-context';
let val = '';
function Start() {
  let [value, setvalue] = useState('');
  let [LVL, setLVL] = useState(0)
  let [page, setpage] = useState(false)
  let [I, setI] = useState(0);
  let [skipsa, setskips] = useState([])
  let [check, setCheck] = useState("")
  let [skiarray,setskiarray] =useState([])
  let id = useRoute();
  let gets = async () => {
    try {
      let valu = await AsyncStorage.getItem("Data") 
      let values = JSON.parse(valu) 
      setCheck(values.Current)
      let levelpages = id;
      
      if(values!==null){
        let value = (levelpages !== "") && (levelpages.params !== undefined) ? levelpages.params.name - 1 : values.Current-1;
      setI(value)

      }else{
        let value = (levelpages !== "") && (levelpages.params !== undefined) ? levelpages.params.name - 1 : 0;
      setI(value) 
      }
      setskips(values.Compalte)

    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    gets();
  }, [])
  const navigation = useNavigation();

  let LevelImages = [
    { Url: p1,  Ans: '10', Level: 'Level 1' },
    { Url: p2,  Ans: '25', Level: 'Level 2' },
    { Url: p3,  Ans: '6',  Level: 'Level 3' },
    { Url: p4,  Ans: '4',  Level: 'Level 4' },
    { Url: p5,  Ans: '128' , Level: 'Level 5' },
    { Url: p6,  Ans: '6',  Level: 'Level 6' },
    { Url: p7,  Ans: '50', Level: 'Level 7' },
    { Url: p8,  Ans: '1020 ', Level: 'Level 8' },
    { Url: p9,  Ans: '9',  Level: 'Level 9' },
    { Url: p10, Ans: '10', Level: 'Level 10' },
    { Url: p11, Ans: '11', Level: 'Level 11' },
    { Url: p12, Ans: '12', Level: 'Level 12' },
    { Url: p13, Ans: '13', Level: 'Level 13' },
    { Url: p14, Ans: '14', Level: 'Level 14' },
    { Url: p15, Ans: '15', Level: 'Level 15' },
    { Url: p16, Ans: '16', Level: 'Level 16' },
    { Url: p17, Ans: '17', Level: 'Level 17' },
    { Url: p18, Ans: '18', Level: 'Level 18' },
    { Url: p19, Ans: '19', Level: 'Level 19' },
    { Url: p20, Ans: '20', Level: 'Level 20' },
  ];

  if (I === LevelImages.length - 1) {
    navigation.navigate("Congration")
  }
  let ValueSet = (el) => {
    val += el;
    setvalue(val);
  }

  let cleaner = () => {
    val = '';
    setvalue("");
  }


  let Enter = () => {
    console.log(I);
    
    if (value === LevelImages[I].Ans) {
      setI(I + 1)
      let data = I + 1;     
      let array = [...skipsa]
      array.push(data)
      
      setskips(array)
      let obj = {Complate:array , Current: data +1}
      console.log(obj);
      
      let store = async (obj) => {
         let ski = AsyncStorage.getItem("SKIP");

        if (check <= I || I == 0 && ski+1!=I) {
          try {
            await AsyncStorage.setItem("Data", JSON.stringify(obj))
          } catch (error) {
            console.log(error)
          }
        }
      };
      store(obj)
      navigation.navigate('NextCenter')
    } else {
      alert("Answer Is Wrong!!")
    }
    val = '';
    setvalue("")
  }

  let Skip = () => {
    setI(I + 1);
    let skip = [...skiarray];
    skip.push(I+1)
    setskiarray(skip)
    AsyncStorage.setItem("SKIP",JSON.stringify(skip));
  
  }
 
  return (
    <>
      <SafeAreaView style={style.continer} >
        <View style={style.main}>
          <ImageBackground source={Back} style={style.main} resizeMode='stretch' >
            <View style={style.flexs}>
              <FontAwesome5 name="backward" size={24} color="white" onPress={() => { navigation.navigate('index') }
              } />
              < Ionicons name="play-skip-forward-sharp" size={24} color="white" style={style.Shift} onPress={Skip} />
            </View>
            < View style={style.Content} >
              <View style={style.Descri}>
                <View style={style.member}>
                  <View>
                    <View>
                    </View>
                    < View style={style.flex} >
                      <ImageBackground source={LVLLABEL} style={style.labelImage} resizeMode='stretch' >
                        <Text style={style.headers}> {LevelImages[I].Level} </Text>
                      </ImageBackground>
                    </View>
                    < View style={style.center} >
                      <Image source={LevelImages[I].Url} style={style.img} />
                    </View>
                    < View >
                    </View>
                  </View>
                  < View style={style.input} >
                    <TextInput style={style.inputs} placeholder='Enter' keyboardType="numeric" value={value} maxLength={5} />
                    <View style={style.fixContent}>
                      <Pressable>
                        <Text style={style.Buttons} onPress={() => { ValueSet('9') }}> 9 </Text>
                      </Pressable>

                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('8') }}> 8 </Text>
                      </Pressable>


                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('7') }}> 7 </Text>
                      </Pressable>

                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('6') }}> 6 </Text>
                      </Pressable>

                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('5') }}> 5 </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('4') }}> 4 </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('3') }}> 3 </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('2') }}> 2 </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('1') }}> 1 </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.Buttons} onPress={() => { ValueSet('0') }}> 0 </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.icons} onPress={cleaner} >
                          <Ionicons name="close" size={24} color="white" />
                        </Text>
                      </Pressable>
                      < Pressable >
                        <Text style={style.icons}>
                          <AntDesign name="enter" size={24} color="white" onPress={Enter} />
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Start

const style = StyleSheet.create({
  continer: {
    flex: 1,
  },
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
    height: '85%',
    justifyContent: 'space-around',
  },

  flex: {
    alignItems: 'center'
  },
  input: {
    width: '100%',
    backgroundColor: '#8080807d'
  },
  labelImage: {
    width: 200,
    height: 70,
    textAlign: 'center'
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
    shadowRadius: 5,
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
    width: 50,
    height: 50,
    backgroundColor: 'green',
    margin: 5,
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 26,
    alignContent: 'center',
    borderRadius: 10,
  },
  icons: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    margin: 5,
    color: 'white',
    fontSize: 22,
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 10,
  },
  flexs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headers: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
  },
  center: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  img: {
    width: 400,
    height: 400,
    marginHorizontal: 'auto',
    resizeMode: 'stretch',
  },
  diff: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    resizeMode: 'stretch',
    marginTop: 200,
  },
  none: {
    display: 'none',
  },

})