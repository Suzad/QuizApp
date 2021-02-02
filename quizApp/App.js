import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import HomeStackScreen from "./src/navigations/HomeStack";
import AuthStackScreen from "./src/navigations/AuthStack";
import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAem2b5nE6sHDOW2wU6qIETxiTAquhyuk8",
	authDomain: "quiz-b0af2.firebaseapp.com",
	databaseURL: "https://quiz-b0af2-default-rtdb.firebaseio.com/",
	projectId: "quiz-b0af2",
	storageBucket: "quiz-b0af2.appspot.com",
	messagingSenderId: "282364800221",
	appId: "1:282364800221:web:8cd308697f91a03e6c7f34",
};
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

function App() {
	return (
		<AuthProvider>
			<AuthContext.Consumer>
				{(auth) => (
					<NavigationContainer>
						{auth.isLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}
					</NavigationContainer>
				)}
			</AuthContext.Consumer>
		</AuthProvider>
	);
}

export default App;
