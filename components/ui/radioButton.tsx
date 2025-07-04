import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { borderRadius, colors, spacing } from "../../theme";
import { TSignInOptions } from "@/constants/sign-up-options";

interface RadioButtonProps {
  options: TSignInOptions[];
  error?: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
}

const RadioButton = ({
  options,
  value,
  onValueChange,
  error,
}: RadioButtonProps) => {
  return (
    <View style={style.container}>
      {options.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            onValueChange(item.value);
          }}
          style={{
            borderWidth: 1,
            borderRadius: borderRadius.full,
            width: "50%",
            borderColor: item.value === value ? colors.dark : colors.border,
            marginLeft: index === 0 ? -8 : 0,
            marginRight: index === 1 ? -8 : 0,
          }}
          key={item.label}
        >
          <View style={style.logoContainer}>
            {<item.logo />}
            <Text>{item.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {error && <Text style={style.errorText}>{error}</Text>}
    </View>
  );
};

export default RadioButton;

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: spacing.md,
  },
  logoContainer: {
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.md,
  },
  errorText: {
    color: colors.error,
  },
});
