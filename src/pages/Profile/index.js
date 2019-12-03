import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail" />

        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Current password"
        />

        <Input name="password" type="password" placeholder="New password" />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button">Log out</button>
    </Container>
  );
}
