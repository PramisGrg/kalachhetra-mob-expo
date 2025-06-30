import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/ui/button";
import FormField from "@/components/ui/FormField";
import MaxWidthContainer from "@/layout/max-width-container";
import { loginSchema, TLoginSchema } from "@/schemas/auth/login.schema";
import { colors, spacing, typography } from "@/theme";
import { AuthNavigationProp } from "@/types/navigation.types";
import { Link } from "expo-router";

const Login = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginSchema) => {
    console.log(data, "This  is data");
  };

  return (
    <SafeAreaView style={styles.container}>
      <MaxWidthContainer>
        <ArrowLeft onPress={() => navigation.goBack()} />
        <View style={{ marginTop: spacing.lg, gap: spacing.md }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("@/assets/icons/logo.png")}
          />

          <Text style={styles.loginText}>Login To Kalachhetra</Text>

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

          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text>Do not have an account ? </Text>
            <Link style={{ color: colors.primary }} href={"/(auth)/sign-in"}>
              Register
            </Link>
          </View>

          <CustomButton onPress={form.handleSubmit(onSubmit)} title="Login" />
        </View>
      </MaxWidthContainer>
    </SafeAreaView>
  );
};

export default Login;

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
