import React, { useState } from "react";
import { View, StyleSheet,Image } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Zocial, AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";
import * as firebase from "firebase";
import Loading from "../components/Loading";

const SignInScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	if (isLoading) {
		return <Loading />;
	}
	else {
		return (
			<AuthContext.Consumer>
				{(auth) => (
					<View style={styles.viewStyle}>
						<Image
							style={styles.imageStyle}
							source={require("./../../assets/quiz_icon.png")}
						/>
						<Card>
						<Card.Title>Welcome to Quiz App!?</Card.Title>
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
						<Card.Divider style={{ backgroundColor: "#fff", height: 30 }} />
						<Button
							icon={<Octicons name="sign-in" size={24} color="black" />}
							title="Sign In"
							type="solid"
							onPress={() => {
								setIsLoading(true);
								firebase
									.auth()
									.signInWithEmailAndPassword(email, password)
									.then((userCreds) => {
										setIsLoading(false);
										auth.setIsLoggedIn(true);
										auth.setCurrentUser(userCreds.user);
									})
									.catch((error) => {
										setIsLoading(false);
										alert(error);
									});
							}}
						/>
						<Card.Divider style={{ backgroundColor: "#fff", height: 15 }} />
						<Button
							icon={<Ionicons name="person-add" size={24} color="black" />}
							title="New to Quiz App?"
							onPress={function () {
								props.navigation.navigate("SignUp");
							}}
						/>
						</Card>
					</View>
			
				)}
			</AuthContext.Consumer>
		);

	}


};

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#66B2FF",
	},
	imageStyle: {
		alignSelf: "center",
		height: 200,
		width: 200,
		marginVertical: 10,
	},
});

export default SignInScreen;
