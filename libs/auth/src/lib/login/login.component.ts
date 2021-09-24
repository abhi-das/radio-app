import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAuthSuccess, loginStart, logoutUser } from '../state/auth.actions';

@Component({
  selector: 'radio-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private _store: Store) {}

  ngOnInit(): void {
    
  }
  userLoginHandler() {
    this._store.dispatch(loginStart());
  }
  userLogOutHandler() {
    this._store.dispatch(logoutUser())
  }
}
