import React,{useState} from 'react';
import{View, Text, StyleSheet, CheckBox, TouchableOpacity} from  'react-native';
import styles from  './Styles';
import { Ionicons} from '@expo/vector-icons';
import * as Animatable from "react-native-animatable"



export default function ListNote({data, handleDelete}){
    const [vis, setVis]=useState(false);
    return(
        

        
        <Animatable.View style={styles.container}
        animation="bounceIn"
        useNativeDriver
        >  
            <TouchableOpacity style={styles.delete} onPress={() => handleDelete(data)} >
                <Ionicons name = 'md-trash' size={20} color='#fff' />
            </TouchableOpacity>

            <Text style={styles.note}>
                {data.note}
            </Text>

            
        </Animatable.View>
        
    )
    
}