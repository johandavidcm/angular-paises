import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent{

  @Output()
  public onEnter: EventEmitter<string> = new EventEmitter();

  public termino: string = '';

  public buscar(): void{
    this.onEnter.emit(this.termino);
  }

}
