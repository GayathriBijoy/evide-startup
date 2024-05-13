import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity, FlatList,Button} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const lang = [{lang:'Malayalam'},{lang:'English'}];
  const navigation= useNavigation();

  const handleRegister=() =>{
    navigation.navigate("Login")
  }
  //const CustomDropdown =() => {
    const [selectedLanguage,setSelectedlanguage]=useState('Language')
    const [isClicked,setIsClicked]=useState(false)
    const [data,setData] =useState(lang)
  //}
  return (
   
    <View style={styles.container}>

      <View style={styles.blueBox}>

      </View>
      <View style={styles.topImageContainer}>
      <Image 
        source={require("../assets/translogo.png")}
        style={styles.topImage}
      />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Create An Account</Text>
      </View>
      {/* <View>
        <Text style={styles.signInText}></Text>
      </View> */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Name"/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Email"/>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} 
        placeholder="Password"
        secureTextEntry/>
      </View>


      <View>
        <TouchableOpacity style={styles.DropSelector} 
          onPress={()=>{
          setIsClicked(!isClicked);
        }}>
          <Text>{selectedLanguage}</Text>
          {isClicked ? (
            <Image source={require("../assets/upload.png")} style={styles.icon}></Image>
          ) : (
          <Image source={require("../assets/dropdown.png")} style={styles.icon}></Image>)}
        </TouchableOpacity>
        {isClicked ? (
        
          <View style={styles.dropdownArea}>
          <FlatList data={data} renderItem={({item,render})=>{
            return(
                <TouchableOpacity style={styles.langitem} onPress={()=>{
                  setSelectedlanguage(item.lang)
                }}> 
                  <Text>{item.lang}</Text>
                </TouchableOpacity>
            )
          }}/>
          </View>
        
          ) : null } 
      </View> 

      {/*<Text style={styles.forgotPasswordText}>hi</Text>*/}
      <View style={styles.button}>
        <Text style={styles.buttext}>Sign up</Text>
      </View>
      <TouchableOpacity onPress= {handleRegister}>
        <Text style={styles.footerText}>
          Have an account? {""}
          <Text style={{textDecorationLine:"underline"}}>Login</Text> </Text>
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
      height:200
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
    textAlign:"right",
    fontSize:48,
    fontWeight:"450",
    color:"black",
  },
  signInText:{
    textAlign:"center",
    fontWeight:"250",
    fontSize:18,
    marginBottom:5,
  },
  inputContainer:{
    backgroundColor:"white",
    flexDirection:"row",
    borderRadius: 19,
    marginHorizontal: 60,
    height:45,
    elevation:0,
    marginVertical:10, //distance between boxes 
    alignItems:"center",
    borderBottomWidth:0.2,
  },
  TextInput:{
    flex:1,
    marginHorizontal: 30,
  },
  forgotPasswordText:{
    color:"#262626",
    textAlign:"right",
    width:"80%",
    height:"10%",
    fontSize:15,
  },
  logInButtonContainer:{},
  login:{
    color:"#262626",
    fontSize:15,
    textAlign:"center",
  },
  footerText:{
    color:"#262626",//!!!!!!!!!!!!!!!!!! BOTTOM TEXT
    textAlign:"center",
    marginTop:90, //height
  },
  dropContainer:{
    backgroundColor:"white",
    flexDirection:"row",
    borderRadius: 19,
    marginHorizontal: 60,
    height:45,
    elevation:0,
    marginVertical:10, //distance between boxes 
    alignItems:"center",
    borderBottomWidth:0.2,
  },
 
  DropSelector:{
    backgroundColor:"white",
    flexDirection:"row",
    borderRadius: 19,
    marginHorizontal: 60,
    height:45,
    elevation:0,
    marginVertical:10, //distance between boxes 
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingLeft: 30,
    paddingRight:15,
    borderBottomWidth:0.2,
  },
  icon:{
    
  },
  dropdownArea:{
    width:'70%',
    height:100,
    borderRadius:20,
    marginTop:1,
    backgroundColor:"white",
    elevation:1,
    alignSelf:"center",
    
  },
  langitem:{
    width:"80%",
    height:50,
    borderBottomWidth:0,
    alignSelf:"center",
    justifyContent:"center"

  },
  buttext:{
    color:"white",
    fontSize: 15,
    textAlign:'center',
  },
  button:{
    alignSelf:"center",
    borderRadius:14,
    paddingVertical:12,
    paddingHorizontal:2,
    backgroundColor:'#15C679',
    width:250,
    top:"2%",
  },

  });