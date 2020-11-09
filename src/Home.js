import React,{useState, useCallback, useEffect} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, FlatList, Modal, TextInput, AsyncStorage, KeyboardAvoidingView} from 'react-native';
import stylesHome from './StylesHome';
import { Ionicons} from '@expo/vector-icons';
import  ListNote from '../src/components/notes';
import * as Animatable from "react-native-animatable";

export default function Home() {
    const [note, setNote]=useState([]);

    const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

    const [open, setOpen] = useState(false);
    const [input,setInput]= useState('');
///bucando as tarefas ao iniciar
    useEffect(()=>{
        async function loadNotes(){
            const noteStorage = await AsyncStorage.getItem('@note');

            if(noteStorage){
                setNote(JSON.parse(noteStorage));
            }
        }
        loadNotes();
    },[]);
///salvando as tarefas
    useEffect(()=>{

        async function saveNotes(){
            await AsyncStorage.setItem('@note', JSON.stringify(note));
            
        }
        saveNotes();
    },[note])

    function haldleAdd(){
        if (input === '') return;

        const data={
            key: input,
            note: input
        };
        setNote([...note, data]);
        setOpen(false);
        setInput('');
    }
    
    const handleDelete = useCallback((data) => {
        const find = note.filter(r => r.key!==data.key);
        setNote(find);
    })


    return(
        <KeyboardAvoidingView behavior='padding' style={stylesHome.container}>
            <View>
                <Text style={stylesHome.title}>
                    Notas
                </Text>
            </View>

            <FlatList ///onde mostra os itens
            marginHorizontal={10}
            showsHorizontalScrollIndicator={false}
            data={note} 
            keyExtractor={(item) => String(item.key) }
            renderItem={({item}) => <ListNote data={item} handleDelete={handleDelete}/>}
             
            />

            <Modal animationType='slide' transparent={false} visible= {open}>
                <SafeAreaView style={stylesHome.modal}>
                    <View style={stylesHome.modalHeader}>

                        <TouchableOpacity onPress = {()=>setOpen(false)} >
                            <Ionicons name='ios-arrow-back' style={{marginLeft:5, marginRight:5}} size={40} color='#fff' />


                        </TouchableOpacity>
                        <Text style={stylesHome.modalTitle }>Nova nota</Text>


                    </View>

                    <View styl= {stylesHome.modalBody} >
                        <TextInput 
                        autoCorrect={false}
                        style={stylesHome.input}
                        multiline={true}
                        value={input}
                        onChangeText={(texto) => setInput(texto)} />

                        <TouchableOpacity style={stylesHome.add} onPress={haldleAdd} >
                            <Ionicons name='md-checkmark' style={stylesHome.addIcon}/>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>

            </Modal>

             
            
            <AnimatedBtn ///botao de adicionar
            style={stylesHome.button}
            useNativeDriver
            animation="bounceInUp"
            duration={1500}
            onPress={() => setOpen(true)}
            >    
                <Ionicons name='md-add' size={35} color='#fff' />
            </AnimatedBtn>
            

            
        
            
        </KeyboardAvoidingView>

    )
    

};