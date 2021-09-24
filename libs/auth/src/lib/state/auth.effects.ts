import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; 
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { loadAuthSuccess, loginStart } from './auth.actions';


@Injectable({
    providedIn: 'root'
})
export class AuthEffect {
    constructor(private _actions: Actions, private _store: Store) {}
    loginUser$ = createEffect(() => 
        this._actions.pipe(
            ofType(loginStart),
            tap(() => {
                const user = {
                    id: 552,
                    user: 'Alex'
                }
                this._store.dispatch(loadAuthSuccess({ user: user }))
            })
        ),
        { dispatch: false }
    )
}