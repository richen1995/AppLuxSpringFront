import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-category-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './devices-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DeviceTableComponent } from './components/device-table/device-table.component';
import { ByDevicePageComponent } from './pages/by-device-page/by-device-page.component';
import { DeviceTableLuxComponent } from './components/device-table-lux/device-table-lux.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    ByDevicePageComponent,
    CountryPageComponent,
    DeviceTableComponent,
    DeviceTableLuxComponent,
    DevicePageComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class devicesModule { }
