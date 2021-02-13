import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./../screens/ProfileScreen";
import HomeStackScreen from "./../navigations/HomeStack"
import AsTeacherScreen from "./../screens/AsTeacherScreen"
import AsStudentScreen from "../screens/AsStudentScreen";
const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="Profile Screen" component={ProfileScreen}/>
      <AppDrawer.Screen name="Home" component={HomeStackScreen} />
      <AppDrawer.Screen name="Teacher Screen" component={AsTeacherScreen} />
      <AppDrawer.Screen name="Student Screen" component={AsStudentScreen} />


    </AppDrawer.Navigator>
  );
};

export default AppDrawerScreen;