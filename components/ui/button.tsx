import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { borderRadius, colors, spacing, typography } from "@/theme";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg";
  style?: ViewStyle;
  disabled?: boolean;
};

const CustomButton = ({
  title,
  onPress,
  variant = "default",
  size = "default",
  disabled = false,
  style,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        style,
        styles.base,
        variantSizeStyles[size],
        variantStyles[variant],
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, variantTextStyles[variant]]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeight.bold,
  },
});

const variantStyles: Record<string, ViewStyle> = {
  default: {
    backgroundColor: colors.dark,
  },
  outline: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
};

const variantTextStyles: Record<string, TextStyle> = {
  default: {
    color: "white",
  },
  outline: {
    color: colors.primary,
  },
  ghost: {
    color: "white",
  },
};

const variantSizeStyles: Record<string, ViewStyle> = {
  default: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  lg: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
};

export default CustomButton;
