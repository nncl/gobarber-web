import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { signFailure, signInSuccess } from './actions';
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
      console.tron.log(`User is not a provider`);
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (e) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
