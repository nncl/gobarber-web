import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { signFailure, signInSuccess, signUpSuccess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error(`User is not a provider`);
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (e) {
    toast.error(`Error signing in!`);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    yield put(signUpSuccess());

    history.push('/');
  } catch (e) {
    toast.error(`Error registering!`);
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
