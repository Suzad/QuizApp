import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Zocial, AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import * as firebase from "firebase";

const SignInScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AuthContext.Consumer>
			{(auth) => (
				<View style={styles.viewStyle}>
					<Card.Title>Welcome to Quiz App!</Card.Title>
					<Card.Divider />
					<Input
						leftIcon={<Zocial name="email" size={24} color="black" />}
						placeholder="E-mail Address"
						onChangeText={function (currentInput) {
							setEmail(currentInput);
						}}
					/>
					<Input
						leftIcon={<AntDesign name="key" size={24} color="black" />}
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={function (currentInput) {
							setPassword(currentInput);
						}}
					/>
					<Button
						icon={<Octicons name="sign-in" size={24} color="black" />}
						title="Sign In"
						type="solid"
						onPress={() => {
							firebase
								.auth()
								.signInWithEmailAndPassword(email, password)
								.then((userCreds) => {
									auth.setIsLoggedIn(true);
									auth.setCurrentUser(userCreds.user);
								})
								.catch((error) => {
									alert("here");
								});
						}}
					/>
					<Button
						icon={<Ionicons name="person-add" size={24} color="black" />}
						title="New to Quiz App?"
						onPress={function () {
							props.navigation.navigate("SignUp");
						}}
					/>
				</View>
			)}
		</AuthContext.Consumer>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#92C7C7",
	},
});

export default SignInScreen;
