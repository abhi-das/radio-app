import { Injectable } from '@angular/core';
import { ProgrammEntity } from '@klorg/programms';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { ProgrammService } from '../services/programms.service';
import { allProgrammLoaded, loadAllProgramms } from './programms.actions';

@Injectable({
  providedIn: 'root',
})
export class ProgrammEffect {
  constructor(
    private actions$: Actions,
    private _programSrv: ProgrammService
  ) {}

  loadProgramms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllProgramms),
      concatMap(
        (): Observable<ProgrammEntity[]> => this._programSrv.findAllProgramms()
      ),
      map((prog: ProgrammEntity[]) => allProgrammLoaded({ programms: prog }))
    )
  );
}
