import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ByCapitalPageComponent } from './pages/by-category-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByDevicePageComponent } from './pages/by-device-page/by-device-page.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by-device',
    component: ByDevicePageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: 'by-device-id/:id',
    component: DevicePageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital'
  }

]


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
