import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonLarge } from "../../components/ButtonLarge";
import { TextInput } from "../../components/TextInput";

import { emailValidator } from "../../utils/emailValidator";
import { passwordValidator } from "../../utils/passwordValidator";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../../components/Loading";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function SignUp() {
  const { signin } = useAuth();
  const usenavigation = useNavigation<ScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingUp = async () => {
    try {
      if (!email.trim().length || !password.trim().length) return;

      setLoading(true);
      await signin({ email, password });
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
              <S.Title>Bem vindo</S.Title>
              <S.SubTitle>
                Olá, acho que você é novo por aqui. Você pode começar a usar o
                aplicativo após se inscrever.
              </S.SubTitle>
              <S.Form>
                <TextInput
                  placeholder={"E-mail"}
                  onChangeText={setEmail}
                  value={email}
                  validator={emailValidator}
                  errorText={"Por favor insira um endereço de e-mail válido"}
                />
                <TextInput
                  placeholder={"Senha"}
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                  validator={passwordValidator}
                  errorText={"A senha deve ter pelo menos 6 caracteres"}
                />
              </S.Form>
              <ButtonLarge onPress={handleSingUp} text={"Inscrever-se"} />
            </S.Header>
            <S.Footer>
              <S.Row>
                <S.Acoount>{"Já tem uma conta?"}</S.Acoount>
                <S.Button>
                  <BorderlessButton
                    onPress={() => {
                      usenavigation.navigate("Login");
                    }}
                  >
                    <S.ButtonText>{"Entrar"}</S.ButtonText>
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
