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
import {Input,Card} from "react-native-elements";
import {Entypo,FontAwesome } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../providers/AuthProvider";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const QuestionScreen = (props) => {
	const [input, setInput] = useState("");

	return (
		<View>
			
			<Card>
            <Input
              placeholder="Type your question "
              leftIcon={<FontAwesome name="pencil" size={24} color="black" />}
              onChangeText={(currentText) => {
                setInput(currentText);
              }}
            />
            <Button
              title="Post"
              type="outline"
              onPress={function () {
				  console.log("post pressed");
              }}
            />
          </Card>
		</View>
	);
};

export default QuestionScreen;
