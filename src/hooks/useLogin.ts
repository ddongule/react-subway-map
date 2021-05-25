import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginForm } from '../types';
import { useAppDispatch, useAppSelector } from '../state/store';
import { loginAsyncAction } from '../state/slices/login';

const useLogin = () => {
  const { accessToken, error } = useAppSelector(
    ({ login: { accessToken, error } }) => ({
      accessToken,
      error,
    })
  );
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const setEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };

  const setPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, password: event.target.value });
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await dispatch(loginAsyncAction.login(form));

    if (loginAsyncAction.login.fulfilled.match(result)) {
      alert('로그인에 성공했습니다.');
      // history.push( 메인화면 아니면 뒤로가 )
    } else {
      alert(error);
    }
  };

  return { accessToken, email, password, setEmail, setPassword, handleLogin };
};
export default useLogin;