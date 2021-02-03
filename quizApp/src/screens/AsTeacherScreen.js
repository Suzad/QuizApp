
import React from 'react';
import {StyleSheet,View,ScrollView,Text,TextInput,TouchableOpacity} from 'react-native';

const AsTeacherScreen =()=>{


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> All Courses</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>

            </ScrollView>

            <View style={styles.footer}>
                
            </View>
            
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>

            </TouchableOpacity>
            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex :1,
    },
    header:{
        backgroundColor: '#66B2FF',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:10,
        borderBottomColor: '#ddd',
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        padding:26,
    },
    scrollContainer:{
        flex:1,
        marginBottom:100,
    },
    footer:{
        position: 'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
    },
    textInput:{
        alignSelf:'stretch',
        color:'#fff',
        padding:10,
        backgroundColor:'#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed',
    },
    addButton:{
        position :'absolute',
        zIndex:11,
        right:20,
        bottom: 90,
        backgroundColor: '#66B2FF',
        width:90,
        height:90,
        borderRadius:50,
        alignItems: 'center',
        justifyContent :'center',
        elevation: 8,
    },
    addButtonText :{
        color:'white',
        fontSize:40,
    }


})

export default AsTeacherScreen;