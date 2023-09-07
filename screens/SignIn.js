import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const SignIn = () => {
    return(
    <View style={styles.mainView}>
    <Text>Sign In</Text>
    <Button title="Go to sign up"></Button>
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
    textStyle: {
      color: '#fff',
    }
  });

export default SignIn