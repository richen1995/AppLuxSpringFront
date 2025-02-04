import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../interfaces/device';

@Component({
  selector: 'gifts-card',
  templateUrl: './card.component.html',
  styles:[
    `
      .card-hover {
        transform: scale(1.05);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s, box-shadow 0.3s;
      }
      
      .card {
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .equal-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%; /* Igual altura para todas las cards */
    }

    .equal-card .card-body {
      flex-grow: 1; /* Asegura que el contenido interno ocupe el espacio restante */
    }

    .card-img-top {
      object-fit: cover; /* Asegura que las imágenes se ajusten correctamente */
      height: 150px; /* Tamaño consistente para las imágenes */
    }

    .custom-padding {
    padding-top: 1px;   /* Ajusta el valor según el padding superior deseado */
    padding-bottom: 1px; /* Ajusta el valor según el padding inferior deseado */
}
    `
  ]
})
export class CardComponent implements OnInit{

  @Input()
  public device!: Device;

  //public urlImg: string = 'http://localhost:8080/media/';
  public urlImg: string = 'https://app-luxtraking-35822574356f.herokuapp.com/media/';
  isHovered = false;

  ngOnInit(): void {
    if(!this.device) throw new Error('Method not implemented.');
  }



  onHover(state: boolean): void {
    this.isHovered = state;
  }
}
