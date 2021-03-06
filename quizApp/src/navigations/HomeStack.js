import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AsTeacherScreen from "../screens/AsTeacherScreen";
import AsStudentScreen from "../screens/AsStudentScreen";
import QuestionScreen from "../screens/QuestionScreen";
import QuestionScreenTeacher from "../screens/QuestionScreenTeacher";
import ProfileScreen from "../screens/ProfileScreen";
import AppDrawer from "../navigations/AppDrawer";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator initialRouteName="Home">
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Teacher Screen" component={AsTeacherScreen} />
			<HomeStack.Screen name="Student Screen" component={AsStudentScreen} />
			<HomeStack.Screen name="Question Screen" component={QuestionScreen} />
			<HomeStack.Screen name="Profile Screen" component={AppDrawer}/>
			<HomeStack.Screen
				name="Question Screen Teacher"
				component={QuestionScreenTeacher}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
