import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadAuthSuccess } from './auth.actions';
import { AuthEntity, AuthUser } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends EntityState<AuthEntity> {
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export const authAdapter: EntityAdapter<AuthEntity> = createEntityAdapter<AuthEntity>();

export const initialState: AuthState = authAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const authReducer = createReducer(
  initialState,
  on(loadAuthSuccess, (state: AuthState, action: AuthUser) => {
      return authAdapter.addOne(action.user, {
        ...state,
        loaded: true
      })
  })
);

// export function reducer(state: State | undefined, action: Action) {
//   return authReducer(state, action);
// }
