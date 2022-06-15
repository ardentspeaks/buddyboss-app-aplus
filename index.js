import * as React from "react";
import { LoginScreen, Image, View, Text, StyleSheet, Button, Modal, TouchableOpacity, Alert, TextInput } from "react-native";

const aPlusLogin = (props) => (
	<LoginScreen hideForgotPassword=true/>
);

export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen", aPlusLogin);
};