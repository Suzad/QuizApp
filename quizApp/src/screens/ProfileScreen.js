import React from 'react';
import {View,Text} from 'react-native';
import HeaderComponent from "./../components/HeaderComponent"

const ProfileScreen=(props)=>{
    return(
        <View>
             <HeaderComponent
                DrawerFunction={() => {
                    props.navigation.toggleDrawer();
                }}
                
            />
        </View>
    )
}

export default ProfileScreen;