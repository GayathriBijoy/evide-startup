import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation= useNavigation();

  const handleRegister=() =>{
    navigation.navigate("Signup")
  }
  return (
    <View style={styles.container}>

      <View style={styles.topImageContainer}>
   
      <Image 
        source={require("../assets/translogo.png")}
        style={styles.topImage}
      />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Welcome </Text>
      </View>
      <View>
        <Text style={styles.signInText}>Log-in to your account </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Email"/>

      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} 
        placeholder="Password"
        secureTextEntry/>
      </View>
      <Text style={styles.forgotPasswordText}>Forgot your password? </Text>
      <View style={styles.logInButtonContainer}>
        <Text style={styles.login}>Login</Text>
      </View>
      <TouchableOpacity onPress= {handleRegister}>
        <Text style={styles.footerText}>
          Dont have an account? {""}
          <Text style={{textDecorationLine:"underline"}}>Create</Text> </Text>
    </TouchableOpacity>
    </View>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
    },
  topImageContainer:{
      height:200,
    },
  topImage:{
      width:"50%",
      height:400,
    },
  helloContainer:{
    alignItems:"center",
    bottom:"3%",
  },
  helloText:{
    //font-family: "Inter",
    textAlign:"center",
    fontSize:48,
    fontWeight:"450",
    color:"black",
  },
  signInText:{
    textAlign:"center",
    fontWeight:"250",
    fontSize:16,
    marginBottom:5,
  },
  inputContainer:{
    backgroundColor:"white",
    flexDirection:"row",
    borderRadius: 19,
    marginHorizontal: 60,
    height:45,
    elevation:0,
    marginVertical:10,
    alignItems:"center",
    borderBottomWidth:0.2,
    top:"10%",
  },
  TextInput:{
    flex:1,
    marginHorizontal: 30,
  },
  forgotPasswordText:{
    color:"#BEBEBE",
    textAlign:"right",
    width:"82%",
    height:"10%",
    fontSize:13,
    top:"5%"

  },
  logInButtonContainer:{
    alignSelf:"center",
    borderRadius:14,
    paddingVertical:12,
    paddingHorizontal:2,
    backgroundColor:'#15C679',
    width:250,
    top:"2%",
  },
  login:{
    color:"white",
    fontSize: 15,
    textAlign:'center',
  },
  footerText:{
    color:"#262626",
    textAlign:"center",
    marginTop:90, //height
  }
  });