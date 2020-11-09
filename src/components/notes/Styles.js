import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:8,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ADD8E6',
        borderRadius:10,
        padding:7,
        elevation:1.5,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3
        }
    },
    note:{
        color:"#000",
        fontSize:18,
        paddingLeft:15,
        paddingRight: 30,
        
        
    },
    delete:{
    paddingLeft: 10,
        
        
        

    },




});

export default styles;