import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  Pressable,
  Text,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { borderRadius, colors, spacing } from "../../theme";

interface CustomInputProp extends TextInputProps {
  value?: string;
  error?: string;
}

const CustomInput = ({ value, error, ...props }: CustomInputProp) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = props.secureTextEntry;

  return (
    <View style={{ gap: 4 }}>
      <View
        style={[
          style.inputContainer,
          isFocused && style.focusedInputContainer,
          error && { borderColor: colors.error },
        ]}
      >
        <TextInput
          {...props}
          value={value}
          style={style.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={isPassword && !showPassword}
        />

        {isPassword && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff width={20} height={20} />
            ) : (
              <Eye width={20} height={20} />
            )}
          </Pressable>
        )}
      </View>

      {error && <Text style={style.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const style = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: borderRadius.full,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  focusedInputContainer: {
    borderColor: colors.dark,
  },
  input: {
    flex: 1,
    fontSize: spacing.md,
  },
  errorText: {
    color: colors.error,
  },
});
