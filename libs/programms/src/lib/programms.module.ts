import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatuiModule } from '@klorg/matui';

import { ProgrammListComponent } from './programm-list/programm-list.component';

import { ProgrammResolver } from './services/programms.resolver';
import { ProgrammEffect } from './state/programms.effects';
import { ProgrammService } from './services/programms.service';
import * as fromReducer from './state/programms.reducer';
import { HttpClientModule } from '@angular/common/http';

const pRouter: Routes = [
  {
    path: '',
    component: ProgrammListComponent,
    resolve: {
      programms: ProgrammResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatuiModule,
    RouterModule.forChild(pRouter),
    StoreModule.forFeature(
      fromReducer.PROGRAMM_FEATURE_KET,
      fromReducer.programmReducer
    ),
    EffectsModule.forFeature([ProgrammEffect]),
  ],
  declarations: [ProgrammListComponent],
  exports: [ProgrammListComponent, RouterModule, HttpClientModule],
  providers: [ProgrammService, ProgrammResolver],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProgrammsModule {}
