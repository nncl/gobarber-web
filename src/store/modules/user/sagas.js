import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { updateSuccess, updateFailure } from './actions';
import api from '~/services/api';

export function* updateUser({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {},
    );

    const response = yield call(api.put, 'users', profile);
    yield put(updateSuccess(response.data));
    toast.success(`Profile updated successfully!`);
  } catch (e) {
    toast.error(`Error updating profile`);
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateUser),
]);
