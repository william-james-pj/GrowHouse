import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonLarge } from "../../components/ButtonLarge";
import { TextInput } from "../../components/TextInput";
import { Loading } from "../../components/Loading";

import { useAuth } from "../../hooks/useAuth";
import { emailValidator } from "../../utils/emailValidator";
import { passwordValidator } from "../../utils/passwordValidator";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Login() {
  const { loginWithEmailAndPassword } = useAuth();
  const usenavigation = useNavigation<ScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      if (!email.trim().length || !password.trim().length) return;

      setLoading(true);
      await loginWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.Wrapper>
            <S.Header>
              <S.Title>Bem vindo de volta</S.Title>
              <S.SubTitle>
                Estou feliz por vê-lo novamente. Você pode continuar de onde
                parou fazendo login.
              </S.SubTitle>
              <S.Form>
                <TextInput
                  placeholder={"E-mail"}
                  onChangeText={setEmail}
                  value={email}
                  validator={emailValidator}
                  errorText={""}
                />
                <TextInput
                  placeholder={"Senha"}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                  validator={passwordValidator}
                  errorText={""}
                />
                <S.TextFogot>Esqueceu a senha?</S.TextFogot>
              </S.Form>
              <ButtonLarge onPress={handleLogin} text={"Entrar"} />
            </S.Header>
            <S.Footer>
              <S.Row>
                <S.Acoount>Não tem uma conta?</S.Acoount>
                <S.Button>
                  <BorderlessButton
                    onPress={() => {
                      usenavigation.navigate("SignUp");
                    }}
                  >
                    <S.ButtonText>Inscrever-se</S.ButtonText>
                  </BorderlessButton>
                </S.Button>
              </S.Row>
            </S.Footer>
          </S.Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
