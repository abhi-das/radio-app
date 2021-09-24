import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, AUTH_FEATURE_KEY } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const isUserLoggedIn = createSelector(
    selectAuthState,
    (state) => !!(state.loaded)
)

export const isUserLoggedOut = createSelector(
    isUserLoggedIn,
    (userOut) => !userOut
)