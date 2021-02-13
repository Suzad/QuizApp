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

const AsStudentScreen = (props) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [courseCode, setCourseCode] = useState("");
	const [coursePassword, setCoursePassword] = useState("");
	const [courseList, setCourseList] = useState([]);

	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
	};

	// let enrolledCourses = [];
	// let temp_courses = [];

	// const loadCourses = () => {
	// 	firebase
	// 		.firestore()
	// 		.collection("student")
	// 		// .orderBy("createdAt", "desc")
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			let temp_courses = [];
	// 			querySnapshot.forEach((doc) => {
	// 				if (firebase.auth().currentUser.uid == doc.id) {
	// 					temp_courses.push({
	// 						course: doc.data().courseCode,
	// 					});
	// 				}
	// 			});
	// 			setCourseList(temp_courses);
	// 		})
	// 		.catch((error) => {
	// 			alert(error);
	// 		});
	// };

	const loadCourses = () => {
		firebase
			.firestore()
			.collection("student/" + firebase.auth().currentUser.uid + "/courses")
			// .orderBy("createdAt", "desc")
			.get()
			.then((querySnapshot) => {
				let temp_courses = [];
				querySnapshot.forEach((doc) => {
					console.log(doc.data());
					// if (firebase.auth().currentUser.uid == doc.id) {
					temp_courses.push({
						course: doc.data().course,
					});
					// }
				});
				setCourseList(temp_courses);
			})
			.catch((error) => {
				alert(error);
			});
	};

	// const loadCourses = () => {
	// 	firebase
	// 		.firestore()
	// 		.collection("student")
	// 		// .orderBy("createdAt", "desc")
	// 		.doc(firebase.auth().currentUser.uid)
	// 		.collection("courseCode")
	// 		.get()
	// 		.then((querySnapshot) => {
	// 			let temp_courses = [];
	// 			querySnapshot.forEach((doc) => {
	// 				if (
	// 					firebase.auth().currentUser.uid ==
	// 					firebase.firestore().collection("student").doc.id
	// 				) {
	// 					let ref = firebase
	// 						.firestore()
	// 						.collection("student")
	// 						.doc(firebase.auth().currentUser.uid)
	// 						.collection("courseCode")
	// 						.get();
	// 					snapshot.doc.map((doc) => {
	// 						temp_courses.push({
	// 							course: doc.data(),
	// 						});
	// 					});
	// 				}
	// 			});
	// 			console.log(
	// 				firebase
	// 					.firestore()
	// 					.collection("student")
	// 					.doc(firebase.auth().currentUser.uid)
	// 					.collection("courseCode")
	// 					.doc("dXbbnLCm0XQFvK8jaa6H")
	// 					.data()
	// 			);
	// 			setCourseList(temp_courses);
	// 		})
	// 		.catch((error) => {
	// 			alert(error);
	// 		});
	// };

	useEffect(() => {
		loadCourses();
	}, [courseList]);

	return (
		// <View>
		// 	<Text style={styles.textStyle}>StudentScreen's Screen</Text>
		// 	<TouchableOpacity
		// 		style={styles.addButton}
		// 		// onPress={toggleModalVisibility}
		// 	>
		// 		<Text style={styles.addButtonText}>+</Text>
		// 	</TouchableOpacity>
		// </View>
		<AuthContext.Consumer>
			{(auth) => (
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.headerText}> Enrolled Courses</Text>
					</View>

					<FlatList
						data={courseList}
						renderItem={({ item }) => {
							// console.log(item);
							return (
								<TouchableOpacity>
									<Text style={styles.textscreenStyle}>{item.course}</Text>
								</TouchableOpacity>
							);
						}}
					/>

					{/* <FlatList> */}
					{/* <TouchableOpacity>
						<Text style={styles.textscreenStyle}>{courseList}</Text>
					</TouchableOpacity> */}
					{/* </FlatList> */}

					<Modal
						animationType="slide"
						transparent
						visible={isModalVisible}
						presentationStyle="overFullScreen"
						onDismiss={toggleModalVisibility}
					>
						<View style={styles.viewWrapper}>
							<View style={styles.modalView}>
								<TextInput
									placeholder="Course code"
									style={styles.textInput}
									onChangeText={function (currentInput) {
										setCourseCode(currentInput);
									}}
									// value={inputValue}
								/>

								{/* <TextInput
									placeholder="Course name"
									// value={inputValue}
									style={styles.textInput}
									onChangeText={function (currentInput) {
										setCourseName(currentInput);
									}}
								/> */}

								<TextInput
									placeholder="Course password"
									// value={inputValue}
									style={styles.textInput}
									onChangeText={function (currentInput) {
										setCoursePassword(currentInput);
									}}
								/>

								<Button
									title="Submit"
									onPress={function () {
										// console.log(courseCode);
										if (courseCode && coursePassword) {
											const referencedCourse = firebase
												.firestore()
												.collection("courses")
												.doc(courseCode);
											referencedCourse.get().then((docSnapshot) => {
												if (docSnapshot.exists) {
													referencedCourse.onSnapshot((doc) => {
														// console.log(doc.data());
														if (doc.data().coursePassword == coursePassword) {
															// temp_courses.push(courseCode);
															firebase
																.firestore()
																.collection("student")
																.doc(firebase.auth().currentUser.uid)
																.collection("courses")
																.add({ course: courseCode });
															// .set({
															// 	// sid: firebase.auth().currentUser.uid,
															// 	courseCode,
															// });
															// 	let ref = firebase
															// 		.firestore()
															// 		.collection("student")
															// 		.doc(firebase.auth().currentUser.uid);
															// 	ref.update({
															// 		courses: firebase.firestore.FieldValue.arrayUnion(
															// 			courseCode
															// 		),
															// 	});
															// enrolledCourses.push(courseCode);
															// setCourseList(enrolledCourses);
														}
													});
												} else {
													alert("No such course exists!");
												}
											});
										}
									}}
								/>

								{/* <Button
									title="Submit"
									onPress={function () {
										// console.log(courseCode);
										if (courseCode && coursePassword) {
											const referencedCourse = firebase
												.firestore()
												.collection("courses")
												.doc(courseCode);
											referencedCourse.get().then((docSnapshot) => {
												if (docSnapshot.exists) {
													referencedCourse.onSnapshot((doc) => {
														// console.log(doc.data());
														if (doc.data().coursePassword == coursePassword) {
															// temp_courses.push(courseCode);
															firebase
																.firestore()
																.collection("student")
																.doc(firebase.auth().currentUser.uid)
																.set({
																	// sid: firebase.auth().currentUser.uid,
																	courseCode,
																});
															// 	let ref = firebase
															// 		.firestore()
															// 		.collection("student")
															// 		.doc(firebase.auth().currentUser.uid);
															// 	ref.update({
															// 		courses: firebase.firestore.FieldValue.arrayUnion(
															// 			courseCode
															// 		),
															// 	});
															enrolledCourses.push(courseCode);
															setCourseList(enrolledCourses);
														}
													});
												} else {
													alert("No such course exists!");
												}
											});
										}
									}}
								/> */}

								<Button
									title="close"
									onPress={() => {
										toggleModalVisibility();
									}}
								/>
							</View>
						</View>
					</Modal>

					<View style={styles.footer}></View>

					<TouchableOpacity
						style={styles.addButton}
						onPress={toggleModalVisibility}
					>
						<Text style={styles.addButtonText}>+</Text>
					</TouchableOpacity>
				</View>
			)}
		</AuthContext.Consumer>
	);
};

const styles = StyleSheet.create({
	// textStyle: {
	// 	color: "blue",
	// 	fontSize: 30,
	// 	alignSelf: "center",
	// },
	container: {
		flex: 1,
	},
	header: {
		backgroundColor: "#66B2FF",
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 10,
		borderBottomColor: "#ddd",
	},
	headerText: {
		color: "white",
		fontSize: 18,
		padding: 26,
	},
	scrollContainer: {
		flex: 1,
		marginBottom: 100,
	},
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	// textInput: {
	// 	alignSelf: "stretch",
	// 	color: "#fff",
	// 	padding: 10,
	// 	backgroundColor: "#252525",
	// 	borderTopWidth: 2,
	// 	borderTopColor: "#ededed",
	// },
	addButton: {
		position: "absolute",
		zIndex: 11,
		right: 20,
		bottom: 90,
		backgroundColor: "#66B2FF",
		width: 90,
		height: 90,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
		elevation: 8,
	},
	addButtonText: {
		color: "white",
		fontSize: 40,
	},
	viewWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	modalView: {
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: "40%",
		left: "50%",
		elevation: 5,
		transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
		height: 280,
		width: width * 0.8,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
	textInput: {
		width: "80%",
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderColor: "rgba(0, 0, 0, 0.2)",
		borderWidth: 1,
		marginBottom: 8,
	},
	textscreenStyle: {
		color: "white",
		fontSize: 20,
		alignSelf: "center",
		backgroundColor: "#66B2FF",
		height: 30,
		width: 300,
		textAlign: "center",
		marginVertical: 10,
	},
});

export default AsStudentScreen;
