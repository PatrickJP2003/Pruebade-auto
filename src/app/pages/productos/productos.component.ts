import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../home/utils/producto';
import * as productoData from '../../../../public/json/productoData.json';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = (productoData as any).default;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickProducto(producto: Producto): void {
    this.router.navigate(['/producto', producto.id]);
  }
}
