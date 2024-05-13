import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const InstOne = () => {

    const navigation= useNavigation();

    const handleRegister=() =>{
        navigation.navigate("inst2")
    }


  return (
   <View style={styles.container}>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
    <TouchableOpacity onPress= {handleRegister}>
        <View style={styles.textconatiner}>
            <Text style={styles.textt}>Pick start and destination location</Text>
        </View>
    </TouchableOpacity>
        <View style={styles.Imageconatiner}> 
            <Image
                source={require("../assets/bottom1.png")}
                style={styles.topImage}
            />
        </View>
        
        
    </LinearGradient>
   </View>
   
  )
}

export default InstOne

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textt:{
        fontSize: 25,
        color:"white",
        alignSelf:"center",
        fontWeight:"300",
        textAlign:"right",
    },
    textconatiner:{
        top:"140%",
        marginHorizontal: 180,
        //backgroundColor: "red",
        //textAlign:"right",
        width:"40%",
        height:"40%",
        paddingRight:"4%",
    },
   
    topImage:{
        alignSelf:"center",
        top:"1900%",
    },
})
