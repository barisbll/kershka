import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import LoginSvg from "./LoginSvg";
import Title from "../UI/Title";
import Button from "../UI/Button";

function LoginSignupPage() {
  const navigation = useNavigation();

  function signInWithEmailHandler() {
    navigation.navigate("LoginWithEmailPage");
  }

  return (
    <View style={styles.container}>
      <LoginSvg />
      <View style={styles.titleContainer}>
        <Title style={styles.infoTitle} name="Log in or create an account" />
      </View>

      <View style={styles.btnContainer}>
        <Button
          name="Continue with email"
          style={styles.buttonText}
          onPress={signInWithEmailHandler}
          icon={
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="white"
            />
          }
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          name="Continue with Facebook"
          style={styles.buttonText}
          onPress={{}}
          containerStyle={styles.facebookBtnContainer}
          icon={
            <MaterialCommunityIcons name="facebook" size={24} color="white" />
          }
        />
      </View>
      <Text style={styles.signInfo}>
        By logging/signing in with my socia login, I agree to cobbect my account
        in accordance with the{" "}
        <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
      </Text>
      <ScrollView style={styles.optionsContainer}>
        <Pressable style={styles.option}>
          <Feather name="help-circle" size={24} color="black" />
          <Text style={styles.optionTxt}>Shopping guide</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="info" size={24} color="black" />
          <Text style={styles.optionTxt}>We are Kershka</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="phone-call" size={24} color="black" />
          <Text style={styles.optionTxt}>Contact</Text>
        </Pressable>
        <Pressable style={styles.option}>
          <Feather name="settings" size={24} color="black" />
          <Text style={styles.optionTxt}>Settings</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default LoginSignupPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    width: "90%",
    marginBottom: "7%",
  },
  btnContainer: {
    flexDirection: "row",
    width: "90%",
    marginTop: "1%",
    marginBottom: "3%",
  },
  infoTitle: {
    width: "100%",
    marginTop: "6%",
    fontSize: 21,
    fontFamily: "Poppins_600SemiBold",
  },
  signInfo: {
    marginTop: "3%",
    fontSize: 11,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    paddingHorizontal: 5,
  },
  facebookBtnContainer: {
    backgroundColor: "#4267B2",
  },
  optionsContainer: {
    marginTop: "5%",
    borderTopColor: "gray",
    borderTopWidth: 0.5,
    paddingTop: "10%",
    alignSelf: "stretch",
  },
  option: {
    flexDirection: "row",
    paddingBottom: "5%",
    paddingStart: "3%",
  },
  optionTxt: {
    paddingStart: "5%",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
