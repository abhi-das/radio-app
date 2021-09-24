import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ProgrammEntity, Programms } from './programms.models';
import { allProgrammLoaded } from './programms.actions';

export const PROGRAMM_FEATURE_KET = 'programms';

export interface ProgrammState extends EntityState<ProgrammEntity> {
  isAllLoaded: boolean;
}

export const programmAdeptor: EntityAdapter<ProgrammEntity> =
  createEntityAdapter<ProgrammEntity>();

export const initialProgrammState: ProgrammState =
  programmAdeptor.getInitialState({
    isAllLoaded: false,
  });

export const programmReducer = createReducer(
  initialProgrammState,
  on(allProgrammLoaded, (state: ProgrammState, action: Programms) => {
    return programmAdeptor.addMany(action.programms, {
      ...state,
      isAllLoaded: true,
    });
  })
);

export const { selectAll } = programmAdeptor.getSelectors();
