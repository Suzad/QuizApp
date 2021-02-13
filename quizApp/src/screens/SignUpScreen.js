import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import * as firebase from "firebase";
import "firebase/firestore";
import Loading from "../components/Loading";
import {
	Zocial,
	AntDesign,
	FontAwesome5,
	Octicons,
	Ionicons,
} from "@expo/vector-icons";

const SignUpScreen = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return <Loading />;
	}
	else {
		return (
			<View style={styles.viewStyle}>
				<Card.Title>Welcome to Quiz App</Card.Title>
				<Card.Divider />
				<Input
					leftIcon={<FontAwesome5 name="user-edit" size={24} color="black" />}
					placeholder="Name"
					onChangeText={function (currentInput) {
						setName(currentInput);
					}}
				/>
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
				<Card.Divider style={{ backgroundColor: "#92C7C7", height: 30 }} />
				<Button
					icon={<Ionicons name="person-add" size={24} color="black" />}
					title="SignUp"
					onPress={() => {
						if (name && email && password) {
							setIsLoading(true);
							firebase
								.auth()
								.createUserWithEmailAndPassword(email, password)
								.then((userCreds) => {
									userCreds.user.updateProfile({ displayName: name });
									firebase
										.firestore()
										.collection("users")
										.doc(userCreds.user.uid)
										.set({
											name: name,
											email: email,
										})
										.then(() => {
											setIsLoading(false);
											alert("Account successfully created!");
											props.navigation.navigate("SignIn");
										})
										.catch((error) => {
											setIsLoading(false);
											alert(error);
										});
								})
								.catch((error) => {
									setIsLoading(false);
									alert(error);
								});
						} else {
							alert("Fields can not be empty!");
						}
					}}
				/>
				<Card.Divider style={{ backgroundColor: "#92C7C7", height: 10 }} />
				<Button
					icon={<Octicons name="sign-in" size={24} color="black" />}
					title="Already have an account?"
					onPress={function () {
						props.navigation.navigate("SignIn");
					}}
				/>
			</View>
		);

	}


};

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#92C7C7",
	},
});

export default SignUpScreen;
