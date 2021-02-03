import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const AsStudentScreen=()=>{

    return(
        <View>
            <Text style={styles.textStyle}>StudentScreen's Screen</Text>
        </View>
        
    )

}

const styles=StyleSheet.create({
    textStyle:{
        color :'blue',
        fontSize: 30,
        alignSelf : 'center',
    }
})

export default AsStudentScreen;