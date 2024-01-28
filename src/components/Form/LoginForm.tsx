import React, { useCallback } from 'react';
import { Text, VStack, useTheme } from 'native-base';
import { TechcellButton, TextInputCtrl } from '@components/Common';
import { CLogin } from '@models/auth.model';
import useAuthStore from '@store/auth.store';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { TOnPress } from '@type/common.type';
import { LoginScreenProps } from '@type/navigation.type';
import Toast from 'react-native-toast-message';
import { loginApi } from '@apis/auth.api';

const loginValidateSchema = Yup.object<CLogin>({
  emailOrUsername: Yup.string().required('Vui lòng nhập tài khoản hoặc email!'),
  password: Yup.string().required('Vui lòng nhập mật khẩu!'),
});

export const LoginForm = ({ navigation }: LoginScreenProps) => {
  const theme = useTheme();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const handleSubmit = useCallback((values: CLogin, formikHelpers: FormikHelpers<CLogin>) => {
    loginApi(values)
      .then(({ data }) => {
        setAuthenticated(data);
        Toast.show({
          type: 'success',
          text1: 'Thành công!',
          text2: 'Đăng nhập thành công 👋',
        });
      })
      .catch((e) => {
        console.log(e);
        Toast.show({
          type: 'error',
          text1: 'Thất bại!',
          text2: 'Đăng nhập không thành công!',
        });
      })
      .finally(() => formikHelpers.setSubmitting(false));
  }, []);

  return (
    <Formik
      initialValues={new CLogin()}
      enableReinitialize
      validationSchema={loginValidateSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <VStack width="100%" space={4}>
          <TextInputCtrl<CLogin> name="emailOrUsername" label="Tài khoản hoặc email" required />
          <TextInputCtrl<CLogin> name="password" label="Mật khẩu" required />

          <Text
            textDecorationLine="underline"
            textAlign="right"
            onPress={() => navigation.navigate('ForgotPassword')}
            color={theme.colors.red}
            fontSize={15}
            width="max-content"
          >
            Quên mật khẩu?
          </Text>

          <TechcellButton
            content="Đăng nhập"
            onPress={handleSubmit as TOnPress}
            style={{ marginTop: 10, marginBottom: 5 }}
            isLoading={isSubmitting}
            isLoadingText="Đang chờ..."
          />

          <Text textAlign="center" fontSize={15}>
            Chưa có tài khoản?{' '}
            <Text
              textDecorationLine="underline"
              onPress={() => navigation.navigate('Register')}
              color={theme.colors.red}
              fontSize={15}
            >
              Đăng ký
            </Text>
          </Text>
        </VStack>
      )}
    </Formik>
  );
};
