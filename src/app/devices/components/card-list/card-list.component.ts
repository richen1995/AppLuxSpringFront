import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../interfaces/device';
import { CountriesService } from '../../services/devices.service';

@Component({
  selector: 'gifts-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent implements OnInit{

  @Input()
  public devices: Device[] = [];

  // prueba
  public devicesPrueba: Device[] = [];
  //public urlImg: string = 'http://localhost:8080/media/';
  public urlImg: string = 'https://app-luxtraking-35822574356f.herokuapp.com/media/';

  constructor(
    private countriesService: CountriesService
  ) { }

  /////RPOBANDO

  ngOnInit(): void {
    this.searchTestAllDevice();
  }

  searchTestAllDevice():void  {
    this.countriesService.searchAllDevice()
      .subscribe( devicesPrueba => {
        console.log("LISTA DE DISPOSITIVOS", devicesPrueba);
        this.devicesPrueba = devicesPrueba;
      });
  }


}
