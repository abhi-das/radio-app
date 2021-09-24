import { ProgrammEntity } from '@klorg/programms';
import { createAction, props } from '@ngrx/store';

export const loadAllProgramms = createAction('[Programm Resolver Load]');

export const allProgrammLoaded = createAction(
  '[Load Programms Effect] All Programm Loaded',
  props<{ programms: ProgrammEntity[] }>()
);

export const allProgrammLoadFail = createAction(
  '[Programms Fail Loading]',
  props<{ prgError: string }>()
);
