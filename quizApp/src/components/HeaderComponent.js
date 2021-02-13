import React from "react";
import { Header } from "react-native-elements";

const HeaderComponent = (props) => {
    return (
        <Header 
            backgroundColor="#66B2FF"
            leftComponent={{
                icon: "menu",
                color: "#fff",
                onPress: props.DrawerFunction,
            }}
            centerComponent={{ text: "Quiz App", style: { color: "#fff",fontSize:20 }, }}
            rightComponent={{
                icon: "lock-outline",
                color: "#fff",
                onPress: function () {
                   console.log("lock sign pressed")
                },
            }}
        />

    );
};

export default HeaderComponent;