import React from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {Card} from 'react-native-elements'
import HeaderComponent from "./../components/HeaderComponent"
import { AuthContext } from "./../providers/AuthProvider";


const ProfileScreen = (props) => {
    return (

        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.viewStyle}>
                    { <HeaderComponent
                        DrawerFunction={() => {
                            props.navigation.toggleDrawer();
                           
                        }}
                    />}

                    <TouchableOpacity
						onPress={function () {
							console.log("Profile Pic Will be here")
                            alert("User profile will be added here")
						}}
					>
						<Image
							style={styles.imageStyle}
							source={require("./../../assets/user.png")}
						/>
					</TouchableOpacity>
                    <Card>
                        <View style={{ flexDirection: "column" }}>
                           
                            <Text style={styles.textStyle}>
                               Name :  {auth.currentUser.displayName}  
                           </Text>

                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: "column" }}>
                           
                            <Text style={styles.textStyle}>
                               Email :  {auth.currentUser.email}  
                           </Text>
                           
                        </View>
                    </Card>
                </View>
            )}
        </AuthContext.Consumer>


    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "black",
        paddingHorizontal: 10
    },
    viewStyle: {
        flex: 1,
    },
    imageStyle: {
		alignSelf: "center",
		height: 200,
		width: 200,
		marginVertical: 10,
	},
});


export default ProfileScreen;