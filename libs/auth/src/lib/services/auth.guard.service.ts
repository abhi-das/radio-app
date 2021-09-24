import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Router, CanActivate } from '@angular/router';
import { isUserLoggedIn } from "../state/auth.selectors";
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private _store: Store, private _router: Router) {}

    canActivate(): Observable<boolean> {
        
        return this._store.pipe(
            select(isUserLoggedIn),
            tap(hasLoggedIn => {
                if(!hasLoggedIn) {
                    this._router.navigateByUrl('/')
                }
            })
        )
    }
}