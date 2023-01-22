import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesServices {
  _url = 'http://localhost:4000/estudiantes';

  constructor(private http: HttpClient) {
    console.log('Servicio Estudiante');
  }

  getEstudiante() {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json');

    return this.http.get(this._url, { headers: header });
  }
}
