import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Device } from '../../interfaces/device';

@Component({
  selector: 'countries-table',
  templateUrl: './device-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class DeviceTableComponent {

  @Input()
  public countries: Country[] = [];

  @Input()
  public devices: Device[] = [];


}
