import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { MatuiModule } from '@klorg/matui';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './state/auth.reducer';
import { AuthGuardService } from './services/auth.guard.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './state/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    MatuiModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([ AuthEffect ])
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthGuardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
