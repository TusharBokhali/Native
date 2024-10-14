import { Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
function index() {

  const navigation = useNavigation();

  return (
    <>
      <View style={style.main}>

        <View style={style.About}>
          <Text style={style.text1}>Math Puzzle</Text>
          <Text style={style.text1}>Version</Text>
          <Text style={style.ver}>1.0.0</Text>
        </View>
        <View style={style.screen}>
          {/* <Link href={"/Start"} > */}
          <Pressable style={style.button} onPress={() => { navigation.navigate('Start') }}>
            <Text style={style.text}>Start</Text>
          </Pressable>
          {/* </Link> */}
          {/* <Link href={"/Level"} > */}
          <Pressable style={style.button} onPress={() => { navigation.navigate('Level') }}>
            <Text style={style.text}>Level</Text>
          </Pressable>
          {/* </Link> */}
          {/* <Link href={"/Start"}> */}
          <Pressable style={style.button} onPress={() => { navigation.navigate('Settings') }}>
            <Text style={style.text} >Settings</Text>
          </Pressable>
          {/* </Link> */}
        </View>
      </View>
    </>
  )
}

export default index

const style = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#444343',
    justifyContent: 'center',
    alignItems: 'center',
  },
  About: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',

    marginTop: 100,
  },
  screen: {
    width: '80%',
    margin: 'auto',
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
    margin: 'auto',
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
  text1: {
    fontSize: 26,
    letterSpacing: 0.90,
    fontWeight: 'bold',
    color: 'white',
  },
  ver: {
    fontSize: 14,
    color: 'white'
  }
})