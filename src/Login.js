import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as Animatable from "react-native-animatable";
import styles from './Style';




export default function Login({navigation}) {
  const [defaullt, setDefaullt] = useState("*senha de sua escolha*")
  const[senha, setSenha] = useState('');

  function verificar(){ /// validação da senha de entrada
    if (senha===defaullt){
      return(
        
        navigation.navigate('Home')
        ///Alert.alert("Senha correta")

        
        
        
      )      
    }
    return(
      Alert.alert("Senha incorreta!",
      "Por favor, tente novamente.",[
        {
          text: "Voltar",
          onPress:()=>navigation.navigate('Login'),
          style:"cancel",
        
        }
      ])
    )     
  }
  return (
    ///parte da imagem junto com a animação
    <View style={styles.container}>
      <Animatable.Image style={styles.image}
        animation="bounceInDown"
        duration={1500}
        source = {require('../assets/login.png')}
      />
      <Animatable.View ///parte da caixa de texto junto com a animação
      animation="bounceInRight"
      duration={1500}
      >
        
        <TextInput style={styles.input}
          
          animation="bounceInRight"
          duration={1500}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          onChangeText={(val) => setSenha(val)}
          
        
        />
      </Animatable.View>

      <Animatable.View ///parte do botão junto com a animação
      animation="bounceInUp"
      duration={2000}
      >
        <TouchableOpacity style={styles.botao}
        onPress={()=>{verificar()}}
        >
          <Text>
            
            
            <Ionicons  name= 'md-key' style= {styles.icon}></Ionicons>
          
        
          </Text>

          
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

