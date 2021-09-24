import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BannerComponent, SliderComponent, NavbarComponent],
  exports: [BannerComponent, SliderComponent, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RadiouiModule {}
