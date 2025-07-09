import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DeveloperOptionChecker from "developer-option-checker";

const explore = () => {
  console.log(
    DeveloperOptionChecker.isDeveloperOptionsEnabled(),
    "This is developer option"
  );

  return (
    <SafeAreaView>
      <View>
        <Text>explore me</Text>
      </View>
    </SafeAreaView>
  );
};

export default explore;
