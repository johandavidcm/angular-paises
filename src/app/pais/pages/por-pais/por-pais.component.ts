import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  public buscar( termino: string ): void {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe(
        (resp) => {
          if("status" in (resp)){
            if(resp.status == 404){
              this.hayError = true;
              this.paises = [];
            }
          } else {
            this.paises = resp;
          }
        },
      );
  }
}
