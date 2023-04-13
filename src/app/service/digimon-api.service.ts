import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators'; // Importa el operador map



@Injectable({
  providedIn: 'root'
})
export class DigimonApiService {
  private url: string = "https://www.digi-api.com/api/v1/digimon";

  constructor(private http: HttpClient) { }

  // Método para obtener todos los Digimon
  getDigimons(): Observable<Digimon[]> {
    return this.http.get<{ content: Digimon[] }>(this.url).pipe(
      map(response => response.content)
    );
  }

  // Método para obtener un Digimon por ID
  getDigimonById(id: number): Observable<Digimon> {
    const digimonUrl = `${this.url}/${id}`;
    return this.http.get<Digimon>(digimonUrl);
  }
}

export interface Digimon {
  id: number;
  name: string;
  href: string;
  image: string;
}
