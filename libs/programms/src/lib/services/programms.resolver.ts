import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { loadAllProgramms } from '../state/programms.actions';

import { finalize, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isAllProgramLoaded } from '../state/programms.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProgrammResolver implements Resolve<any> {
  loading = false;
  constructor(private _store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._store.pipe(
      select(isAllProgramLoaded),
      tap((hasLoaded) => {
        if (!this.loading && !hasLoaded) {
          this.loading = true;
          this._store.dispatch(loadAllProgramms());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
