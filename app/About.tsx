import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';

const About = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <FontAwesome5 name="backward" size={24} color="white" onPress={() => { navigation.navigate('Settings') }} />
                <Text style={styles.main}>About</Text>
                <View style={styles.Para}>
                    <ScrollView >
                        <Text style={styles.Text}>Math is not everyone’s favorite, understandably. Hours of math homework and difficult equations can make anyone sour on the subject. But when math problems are outside of a school setting with no time limit, and there’s a more whimsical concept than just finding x, they can be great activities for kids. (And adults, of course!) These math puzzles test your brain and critical-thinking skills and provide some constructive, educational fun.

                            Math riddles and puzzles come in plenty of different varieties. Some more straightforward number puzzles require calculations to find the solution. Others are more like logic puzzles that require puzzle strategies and challenge you to look for a pattern. Still, others present their brain teasers through pictures, making them great for visual learners. From Reader’s Digest‘s Mind Stretchers books, these math puzzles have a bit of everything!</Text>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#444343',
        padding: 20,
    },
    main: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center'
    },
    Para: {
        width: '100%',
        // height:'80%',
        marginTop: 30,
        paddingBottom: 50,
        marginHorizontal: 'auto'
    },
    Text: {
        color: 'white',
        textAlign: 'justify',
        fontSize: 22,
    }
})