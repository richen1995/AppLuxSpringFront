import { Component, Input } from '@angular/core';
import { Device } from '../../interfaces/device';
import { CountriesService } from '../../services/devices.service';

@Component({
  selector: 'devices-table',
  templateUrl: './device-table-lux.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class DeviceTableLuxComponent {

  //public urlImg: string = 'http://localhost:8080/media/';
  public urlImg: string = 'https://app-luxtraking-35822574356f.herokuapp.com';

  constructor(
    private countriesService: CountriesService
  ) { }


  @Input()  
  public devices: Device[] = [];

  upload(event: any){
    const file = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file', file);

      this.countriesService.uploadFile(formData)
        .subscribe( resp => {
          console.log('response', resp);
        });
    }
  }
}
