import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	Modal,
	Dimensions,
	Button,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../providers/AuthProvider";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const QuestionScreen = (props) => {
	return (
		<View>
			<Text>Questions</Text>
		</View>
	);
};

export default QuestionScreen;
