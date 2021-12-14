import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/pais.interface';
import { FailResponse } from '../interfaces/fail-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private http: HttpClient,
  ) { }

  public buscarPais( termino: string ): Observable<Country[] | FailResponse>{
    const url: string = `${ environment.apiUrl }/name/${ termino }`;
    return this.http.get<Country[] | FailResponse>(url);
  }

}
