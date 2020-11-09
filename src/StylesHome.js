import { StyleSheet} from 'react-native';


const stylesHome = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#4B96CB'
  
    },
    title:{
        fontSize: 20,
        marginTop:30,
        paddingBottom:10,
        textAlign: 'center',
        color: '#fff',
        
        

    },
    
    
    button:{
        position:'absolute',
        width:60,
        height:60,
        backgroundColor:'#4169E1',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        right:25,
        bottom:25,
        elevation:2,
        zIndex:9,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3,
        }
        
    },
    modal:{
        flex:1,
        backgroundColor:'#4B96CB'

    },
    modalHeader:{
        marginLeft:10,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    modalTitle:{
        marginLeft:110,
        fontSize:23,
        color:'#fff',
        
         
    },
    modalBody:{
        marginTop:15,
    },
    input:{
        fontSize:15,
        marginLeft:10,
        marginRight:10,
        marginTop:30,
        backgroundColor:'#ADD8E6',
        padding: 9,
        height:250,
        textAlignVertical: 'top',
        borderRadius:5,
    },
    addIcon:{
        fontSize: 50,
        color: '#008000'
    },
    add:{
        left:100,
        marginTop: 30,
        backgroundColor: '#ADD8E6',
        borderRadius: 10,
        width:200,
        alignItems: "center",
        justifyContent: 'center'
    }
    
  
  });

  export default stylesHome; 