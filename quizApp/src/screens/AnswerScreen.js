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
import { Input, Card } from "react-native-elements";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";
import { AuthContext } from "../providers/AuthProvider";
import { FlatList } from "react-native-gesture-handler";
import QuestionCardTeacher from "../components/QuestionCardTeacher";
import QuestionCard from "../components/QuestionCard";

const { width } = Dimensions.get("window");

const AnswerScreen = (props) => {
	const [input, setInput] = useState("");
	const [courseCode, setCourseCode] = useState("");
	const [ansList, setAnsList] = useState([]);

	const loadAns = () => {
		// console.log(props.route.params.paramkey.item);

		firebase
			.firestore()
			.collection("answers")
			// .orderBy("createdAt", "desc")
			.get()
			.then((querySnapshot) => {
				let temp_answers = [];
				querySnapshot.forEach((doc) => {
					// if (props.route.params.paramkey.item.course == doc.data().course) {
					temp_answers.push({
						que: doc.data(),
					});
					// }
				});
				setAnsList(temp_answers);
			})
			.catch((error) => {
				alert(error);
			});
	};

	useEffect(() => {
		loadAns();
	}, [ansList]);

	return (
		<ScrollView>
			{/* <Card>
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
						// console.log(props);
						// console.log("post pressed");
						firebase
							.firestore()
							.collection("question")
							.doc()
							.set({
								que: input,
								course: props.route.params.paramkey.item.course,
							})
							.then(() => {
								alert("Question created successfully!");
								// toggleModalVisibility();
							})
							.catch((error) => {
								alert(error);
							});
					}}
					// } else {
					// 	alert("Field can not be empty!");
					// }
					//         }}
				/> */}

			<FlatList
				data={ansList}
				renderItem={function (item) {
					console.log(item);
					// return <QuestionCardTeacher body={item} />;
				}}
			/>
			{/* </Card> */}
		</ScrollView>
	);
};

export default AnswerScreen;
