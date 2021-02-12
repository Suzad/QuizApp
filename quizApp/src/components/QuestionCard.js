import React,{useState} from 'react';
import { Text, View, StyleSheet, Modal,TextInput,Dimensions } from 'react-native';
import { Card, Button, Avatar } from "react-native-elements";
import { AntDesign,FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");


const QuestionScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [answer, setAnswer] = useState("");

    const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
	};
    return (
        <View>
            <Text style={styles.textStyle}>Question Screen</Text>
            <Card >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        containerStyle={{ backgroundColor: "#66B2FF" }}
                        rounded
                        icon={{ name: "question", type: "font-awesome", color: "black" }}
                        activeOpacity={1}
                    />
                    <Text style={styles.textStyle}>
                        Question
                    </Text>
                </View>
                <Text style={{ fontStyle: "normal",fontSize:30 }}> Question will be here </Text>
              
                <Card.Divider />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Button
                        type="outline"
                        title="  Answer "
                        icon={<MaterialCommunityIcons name="message-reply" size={24} color="#66B2FF" />}
                        onPress={
                            function(){
                               setModalVisible();
                            }
                        }
                    />
                </View>
            </Card>

            	<Modal
						animationType="fade"
						transparent
						visible={isModalVisible}
						presentationStyle="overFullScreen"
						onDismiss={toggleModalVisibility}
					>
						<View style={styles.viewWrapper}>
							<View style={styles.modalView}>
								<TextInput
									placeholder="Answer here"
									style={styles.textInput}
									onChangeText={function (currentInput) {
										setAnswer(currentInput);
									}}
									// value={inputValue}
								/>


								<Button
									title="Submit"
                                    type="outline"
									onPress={function () {
										console.log("Modal pressed")
									}}
								/>

								<Button
                                    type="clear"
									title="Close"
									onPress={() => {
										toggleModalVisibility();
									}}
								/>
							</View>
						</View>
					</Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#66B2FF',
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
    viewWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
})

export default QuestionScreen;