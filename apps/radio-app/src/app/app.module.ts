import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RadiouiModule } from '@klorg/radioui';
import { AuthGuardService, AuthModule } from '@klorg/auth';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appStore } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';

const router: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'programms',
    loadChildren: () =>
      import('@klorg/programms').then((mod) => mod.ProgrammsModule),
    canActivate: [ AuthGuardService ]
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(router, { enableTracing: false }),
    RadiouiModule,
    AuthModule,
    StoreModule.forRoot(appStore.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
