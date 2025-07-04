import React from "react";
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Text, View } from "react-native";
import RadioButton from "./radioButton";
import { spacing } from "@/theme";
import { TSignInOptions } from "@/constants/sign-up-options";

type RadioButtonFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  options: TSignInOptions[];
  label?: string;
};

const RadioButtonField = <T extends FieldValues>({
  form,
  name,
  options,
  label,
}: RadioButtonFieldProps<T>) => {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={{ gap: spacing.sm }}>
          {label && <Text>{label}</Text>}
          <RadioButton
            options={options}
            value={value}
            onValueChange={onChange}
            error={error?.message}
          />
        </View>
      )}
    />
  );
};

export default RadioButtonField;
