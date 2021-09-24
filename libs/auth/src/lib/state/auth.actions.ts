import { createAction, props } from '@ngrx/store';
import { AuthEntity } from './auth.models';

export const init = createAction('[Auth Page] Init');

export const loginStart = createAction(
  '[Login Start]'
)

export const loadAuthSuccess = createAction(
  '[Auth Effect] Load Auth Successfully',
  props<{ user: AuthEntity }>()
);

export const loadAuthFailure = createAction(
  '[Auth] Load Auth Failure',
  props<{ error: any }>()
);

export const logoutUser = createAction(
  '[Logged out]'
)