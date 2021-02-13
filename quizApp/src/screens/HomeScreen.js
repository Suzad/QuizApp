import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";

const HomeScreen = (props) => {
	return (
		<AuthContext.Consumer>
			{(auth) => (
				<View>
					<Text style={styles.textStyle}>Home Screen</Text>

					<Text style={styles.textscreenStyle}>Use As Teacher</Text>

					<TouchableOpacity
						onPress={function () {
							props.navigation.navigate("Teacher Screen");
						}}
					>
						<Image
							style={styles.imageStyle}
							source={require("./../../assets/teacherteaching.jpg")}
						/>
					</TouchableOpacity>

					<Text style={styles.textscreenStyle}>Use As Student</Text>

					<TouchableOpacity
						onPress={function () {
							props.navigation.navigate("Student Screen");
						}}
					>
						<Image
							style={styles.imageStyle}
							source={require("./../../assets/student.jpg")}
						/>
					</TouchableOpacity>

					<Button
						type="clear"
						title="View Your Profile"
						onPress={function () {
							props.navigation.navigate("Profile Screen");
						}}
					/>

					<Button
						type="solid"
						title="Log Out!"
						onPress={function () {
							auth.setIsLoggedIn(false);
							auth.setCurrentUser({});
						}}
					/>
				</View>
			)}
		</AuthContext.Consumer>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		color: "white",
		fontSize: 40,
		alignSelf: "center",
		backgroundColor: "#66B2FF",
		marginVertical: 5,
		height: 60,
		width: 400,
		textAlign: "center",
	},
	textscreenStyle: {
		color: "white",
		fontSize: 20,
		alignSelf: "center",
		backgroundColor: "#66B2FF",
		height: 30,
		width: 300,
		textAlign: "center",
		marginVertical: 10,
	},
	imageStyle: {
		alignSelf: "center",
		height: 170,
		width: 200,
		marginVertical: 10,
	},

	backgroundColor: {
		color: "#66B2FF",
	},
});

export default HomeScreen;
