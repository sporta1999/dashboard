import { Component, OnInit } from '@angular/core';
import { EstudiantesServices } from '../services/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  public estudiantes: Array<any> = [];

  constructor(private estudiantesServices: EstudiantesServices) {
    this.estudiantesServices.getEstudiante().subscribe((resp: any) => {
      console.log(resp);
      this.estudiantes = resp;
    });
  }

  ngOnInit(): void {
  }

}
