import { StyleSheet} from 'react-native';
import React from 'react';

///estilos do Login
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#4B96CB',
      justifyContent: 'center',
      flexDirection:'column'
    },
    image:{
      width: 150,
      height: 150,
      paddingBottom:50
      
  
   
    },
    input:{
      marginTop:10,
      padding:10,
      width:300,
      backgroundColor:'#fff',
      fontSize:16,
      fontWeight:'bold',
      borderRadius:10
    },
    text:{
      marginTop:20,
      fontSize: 50,
      color: '#fff',
      textAlign: "center",
      fontSize: 30, 
      alignItems: "center",
    },
    icon:{
      fontSize: 50,
      color: '#008000'
      
    },
    botao:{
      marginTop: 30,
      backgroundColor: '#F0F8FF',
      borderRadius: 10,
      width:200,
      alignItems: "center",
       
    },
    alert:{
    textAlign: 'center'
    }
    
  });

export default styles; 
  