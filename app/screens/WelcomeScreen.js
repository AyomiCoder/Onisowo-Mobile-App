import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
    // <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
    <View style={styles.background}>
    <View style={styles.logoContainer}>
    <Image style={styles.logo} source={require('../assets/logo-only.png')} />
    <Image style={styles.logoText} source={require('../assets/text.png')} />
    {/* <Text>Shop With Ease</Text>  */}
    </View>
    <View style={styles.loginButton}><Text style={styles.btnText}>Get Started</Text></View>   
    {/* <View style={styles.signUp}></View> */}
    </View>
     /* </ImageBackground> */
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#005CCB"
    },
    loginButton: {
        width: '80%',
        borderRadius: 10,
        top: 200,
        height: 50,
        backgroundColor: "white",
    },

    btnText: {
        fontSize: 20,
        alignSelf: "center",
        justifyContent: "center",
        top: 10,
 
         
    },
    signUp:{
        width: '100%',
        height: 50,
        backgroundColor: "#243D25" ,
    },
    logo: {
        height: 100,
        width: 125,
    },
    logoText: {
        height: 50,
        width: 270,
    },
    logoContainer: {
        // position: "absolute",
        // top: 70,
        alignItems: "center",

    }
});

export default WelcomeScreen;