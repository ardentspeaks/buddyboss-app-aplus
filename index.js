import * as React from "react";
import { LoginScreen, View, Text, StyleSheet, Button, Modal, TouchableOpacity, Alert, TextInput } from "react-native";

const aPlusLogin = (props) => (
	<View style={{flex: 1, justifyContent: "center", alignSelf: "center"}}>
   		<Text>This is a custom login screen</Text>
   		<Button title="Login" onPress={() => props.navigation.navigate("Auth")}/>
   		<Text>Privacy</Text>
 	</View>
);

aPlusLogin.navigationOptions = {header: null};

export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", aPlusLogin);

	externalCodeSetup.settingsScreenApi.setSettingsListFilter((oldTabs, props) => {
		console.log( oldTabs )
	});
};

