import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map } from 'rxjs';

import { Country } from '../interfaces/country';
import { Device } from '../interfaces/device';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  //private luxUrl: string = 'http://localhost:8080'
  private luxUrl: string = 'https://app-luxtraking-35822574356f.herokuapp.com'

  constructor(private http: HttpClient ) { }

  private getCountriesRequest(url: string):Observable<Country[]>{
    return this.http.get<Country[] >(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  private getDevicesRequest(url: string):Observable<Device[]>{
    return this.http.get<Device[] >(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

    //SEARCHS

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  searchCapital( term: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.getCountriesRequest(url);
  }

  searchCountry( term: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ term }`;
    return this.getCountriesRequest(url);
  }

  searchRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.getCountriesRequest(url);
  }

  searchDevice( code: string ): Observable<Device[]> {
     const url = `${ this.luxUrl }/device/${ code }`; 
    return this.getDevicesRequest(url);
  } 

  //SUBIR ARCHIVOS
  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.luxUrl}/media/upload`, formData);
  }

  //SEARCH by ID DEVICE
  searchDeviceById( code: string ): Observable<Device | null> {

    const url = `${ this.luxUrl }/device/${ code }`;

    return this.http.get<Device[]>( url )
      .pipe(
        map( devices => devices.length > 0 ? devices[0]: null ),
        catchError( () => of(null) )
      );
  }

  //SEARCH de PRUEBA DE TODOS LOS DISPOSITIVOS
  searchAllDevice(): Observable<Device[]> {
    const url = `${ this.luxUrl }/device`; 
   return this.getDevicesRequest(url);
 } 
}
