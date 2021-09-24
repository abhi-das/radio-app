import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStore } from './store/reducers';

@Component({
  selector: 'klorg-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private _store: Store<appStore.AppState>) {}
  title = 'radio-app';
}
