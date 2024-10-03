import { Text, View, StyleSheet, Pressable, Alert, } from 'react-native';
import { Link } from 'expo-router';
function First(navigation) {
  return (
    <>
      <View style={style.main}>
        <View style={style.About}>
          <Text style={style.text1}>Math Puzzle</Text>
          <Text style={style.text1}>Version</Text>
          <Text style={style.text1}>1.0.0</Text>
        </View>
        <View style={style.screen}>
          <Link href={"/First"}>
            <Pressable style={style.button} onPress={() => { navigation.navigation("First") }}>
              <Text style={style.text} >Continue</Text>
            </Pressable>
          </Link>
          <Link href={"/Start"} onPress={() => { navigation.navigation("Start") }}>
            <Pressable style={style.button} >
              <Text style={style.text}>Start</Text>
            </Pressable>
          </Link>
          <Link href={"/Level"} onPress={() => { navigation.navigation("Level") }}>
            <Pressable style={style.button} >
              <Text style={style.text}>Level</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </>
  )
}

export default First

const style = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#444343',
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
    height: '100%',
    alignItems: 'center',
    marginTop: 100,
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
  text: {
    width: 100,
    textAlign: 'center',
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
  }
})