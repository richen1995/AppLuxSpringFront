import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {  /*ngOnInit se ejecuta luego del constructor */
    this.debouncer.pipe(
      debounceTime(300) /*espera un segundo antes de lanzar la consulta*/
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
