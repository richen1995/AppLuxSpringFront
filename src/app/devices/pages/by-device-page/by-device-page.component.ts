import { Component } from '@angular/core';
import { Device } from '../../interfaces/device';
import { CountriesService } from '../../services/devices.service';

@Component({
  selector: 'app-by-device-page',
  templateUrl: './by-device-page.component.html',
  styleUrls: []
})
export class ByDevicePageComponent {

  public devices: Device[] = [];
  public isLoading: boolean = false; //para controlar cuando aparece spinner

  constructor( private countriesService: CountriesService ) {}

  searchByDevice( term: string ):void  {
    this.isLoading = true;
    this.countriesService.searchDevice( term )
      .subscribe( devices => {
        this.devices = devices;
        this.isLoading = false;
      });
  }
  
}
