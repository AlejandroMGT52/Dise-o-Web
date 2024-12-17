import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent {
  matrix: number[][] = [];

  // Función para generar la matriz de acuerdo al tamaño seleccionado
  generateMatrix(size: number) {
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j + 1);  // Llenando la matriz con valores
      }
      this.matrix.push(row);
    }
  }
}


