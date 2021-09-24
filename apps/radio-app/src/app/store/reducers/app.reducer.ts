import { ActionReducerMap } from '@ngrx/store';
import { AuthEntity } from '@klorg/auth';

export interface AppState {
  auth?: AuthEntity;
}

export const appReducer: ActionReducerMap<AppState> = {};
