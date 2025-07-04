/* eslint-disable import/no-unresolved */
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing, typography } from "@/theme";
import MaxWidthContainer from "@/layout/max-width-container";
import { ArrowLeft } from "lucide-react-native";
import CustomButton from "@/components/ui/button";
import FormField from "@/components/ui/FormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, TSignupSchema } from "@/schemas/auth/signup.schema";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "../../types/navigation.types";
import { Link } from "expo-router";
import { SignInOptions } from "@/constants/sign-up-options";
import RadioButtonField from "@/components/ui/RadioFormField";

const Register = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const form = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: TSignupSchema) => {
    console.log(data, "This is data");
  };

  return (
    <SafeAreaView style={styles.container}>
      <MaxWidthContainer>
        <ArrowLeft onPress={() => navigation.goBack()} />
        <View style={{ marginTop: spacing.md, gap: spacing.md }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("@/assets/icons/logo.png")}
          />

          <Text style={styles.loginText}>Register To Kalachhetra</Text>

          <FormField
            form={form}
            name="email"
            placeholder="Email"
            label="Email Address"
          />

          <FormField
            form={form}
            name="password"
            placeholder="Password"
            label="Password"
            secureTextEntry={true}
          />

          <FormField
            form={form}
            name="confirmPassword"
            placeholder="Confirm Password"
            label="Confirm Password"
            secureTextEntry={true}
          />

          <RadioButtonField
            form={form}
            name="role"
            label="What describes you the best"
            options={SignInOptions}
          />

          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text>Already have an account ? </Text>
            <Link style={{ color: colors.primary }} href={"/(auth)/login"}>
              Login
            </Link>
          </View>

          <CustomButton
            onPress={form.handleSubmit(onSubmit)}
            title="Register"
          />
        </View>
      </MaxWidthContainer>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.lg,
    flex: 1,
    backgroundColor: colors.background,
  },
  loginText: {
    fontSize: typography.fontSizes["2xl"],
    fontWeight: typography.fontWeight.bold,
  },
});
