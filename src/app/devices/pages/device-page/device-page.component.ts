import { Component, OnInit } from '@angular/core';
import { Device } from '../../interfaces/device';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/devices.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: []
})
export class DevicePageComponent implements OnInit{

  //public urlImg: string = 'http://localhost:8080/media/';
  public urlImg: string = 'https://app-luxtraking-35822574356f.herokuapp.com/media/';

  public device?: Device;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchDeviceById( id )),
    )
    .subscribe( device => {
      if ( !device ) return this.router.navigateByUrl('');
        return this.device = device;
    });

  }
}
