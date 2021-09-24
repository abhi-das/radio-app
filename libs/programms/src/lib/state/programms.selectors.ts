import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ProgrammState,
  PROGRAMM_FEATURE_KET,
  selectAll,
} from './programms.reducer';

export const selectProgramsState =
  createFeatureSelector<ProgrammState>(PROGRAMM_FEATURE_KET);

export const selectAllProgramms = createSelector(
  selectProgramsState,
  selectAll
);

export const isAllProgramLoaded = createSelector(
  selectProgramsState,
  (state) => state.isAllLoaded
);
