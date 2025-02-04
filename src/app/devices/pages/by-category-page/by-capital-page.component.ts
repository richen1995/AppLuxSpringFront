import { Component } from '@angular/core';
import { CountriesService } from '../../services/devices.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false; //para controlar cuando aparece spinner

  constructor( private countriesService: CountriesService ) {}

  searchByCapital( term: string ):void  {
    this.isLoading = true;
    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });

  }

}
