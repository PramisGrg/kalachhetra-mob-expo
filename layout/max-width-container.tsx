import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface MaxWidthContainerProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const MaxWidthContainer = ({ children, style }: MaxWidthContainerProps) => {
  return <View style={[styles.layoutContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    width: "90%",
    marginHorizontal: "auto",
  },
});

export default MaxWidthContainer;
