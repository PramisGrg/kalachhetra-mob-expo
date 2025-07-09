import { View, Text } from "react-native";
import React from "react";
import { Controller, UseFormReturn, FieldValues, Path } from "react-hook-form";
import CustomInput from "./input";
import { spacing } from "../../theme";

interface FormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  placeholder: string;
  label?: string;
  secureTextEntry?: boolean;
}

const FormField = <T extends FieldValues>({
  form,
  name,
  placeholder,
  label,
  secureTextEntry = false,
}: FormFieldProps<T>) => {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <View style={{ gap: spacing.sm }}>
            {label && <Text>{label}</Text>}
            <CustomInput
              placeholder={placeholder}
              value={value || ""}
              onChangeText={onChange}
              error={error?.message}
              secureTextEntry={secureTextEntry}
            />
          </View>
        );
      }}
    />
  );
};

export default FormField;
