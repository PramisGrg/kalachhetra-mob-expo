import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import backgroundImage from "@/assets/images/background.jpeg";
import { spacing, typography } from "../../theme";
import CustomButton from "@/components/ui/button";
import { useNavigation } from "@react-navigation/native";
import MaxWidthContainer from "@/layout/max-width-container";
import { AuthNavigationProp } from "@/types/navigation.types";

const Onbaroding = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <MaxWidthContainer style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Made by Pramis Gurung</Text>
          <Text style={styles.titleText}>Kalachhetra</Text>
          <Text style={styles.text}>where imagination meets creation</Text>
          <Text style={[styles.text, { marginTop: "20%" }]}>
            A Palette of emotions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            style={{ width: "48%" }}
            onPress={() => {
              navigation.navigate("sign-in");
            }}
            variant="ghost"
            title="Sign Up"
          />
          <CustomButton
            style={{ width: "48%" }}
            onPress={() => {
              navigation.navigate("login");
            }}
            title="Login"
          />
        </View>
      </MaxWidthContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  headerContainer: {
    marginTop: "10%",
  },
  titleText: {
    fontSize: 60,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: typography.fontSizes.md,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: "15%",
    gap: spacing.md,
  },
});

export default Onbaroding;
