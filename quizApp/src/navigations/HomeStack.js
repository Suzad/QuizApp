import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AsTeacherScreen from "../screens/AsTeacherScreen";
import AsStudentScreen from "../screens/AsStudentScreen";
import ProfileScreen from "../screens/ProfileScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator initialRouteName="Home">
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Teacher Screen" component={AsTeacherScreen}/>
			<HomeStack.Screen name="Student Screen" component={AsStudentScreen}/>
			<HomeStack.Screen name="Profile Screen" component={ProfileScreen}/>
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
