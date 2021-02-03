import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AsTeacherScreen from "../screens/AsTeacherScreen";
import AsStudentScreen from "../screens/AsStudentScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator initialRouteName="Home">
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Teacher Screen" component={AsTeacherScreen}/>
			<HomeStack.Screen name="Student Screen" component={AsStudentScreen}/>
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
