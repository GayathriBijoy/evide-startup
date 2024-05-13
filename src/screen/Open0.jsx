import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const OpenScreen = () => {

  const navigation= useNavigation();

    const handleRegister=() =>{
        navigation.navigate("inst1")
    }


  return (
    <View>
      <View style={styles.container}>

      <View style={styles.topImageContainer}>

      <Image 
        source={require("../assets/logo.png")}
        style={styles.topImage}
        />
      
      </View>
      </View>
    </View>
     
  );
};

export default OpenScreen

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#2E2E2E",
    flex:1,
},
topImageContainer:{
  height:900,
  backgroundColor:"#2E2E2E"
},
topImage:{
  width:"40%",
  height:400,
  alignSelf:"center",
  top:"20%"
},
bottomImage:{
  alignSelf:"center",
  top:"800%",
  //paddingLeft:10,

}

});
  