import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import BackIcon from 'react-native-vector-icons/Feather';

const SignUp = () => {
    function navigate() {
        navigation.navigate('signUp')
    }

    return(
    <View style={styles.mainView}>
        <View style={styles.TopView}>

        </View>

        <ScrollView style={styles.BottomView}>
            <BackIcon name="chevron-left" size={30} color={"#fff"}/>

            <Text style={styles.Heading}>
            Welcome{'\n'} back
            </Text>
            <View style={styles.FormView}>
                <TextInput placeholder={"Full name"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                <TextInput placeholder={"Email address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                <TextInput placeholder={"Mobile"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                <TextInput placeholder={"Password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/>



                <TextInput placeholder={"Confirm Password"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                <TouchableOpacity style={styles.Button}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Button} onPress={navigate}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
        </ScrollView>
            
    </View>)
}

const styles = StyleSheet.create({
    mainView: { 
      marginTop: 40,
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
    TopView: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    BottomView: {
        width: '100%',
        height: '60%',
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textStyle: {
      color: '#fff',
    },
    Heading: {
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 30
    },
    FormView: {
        width: '100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },

    TextInput:{
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        color: '#fff',
    },
    Button: {
        width: '90%',
        color: '#000',
        height: 52,
        backgroundColor: '#fff'
    }
    
  });


export default SignUp