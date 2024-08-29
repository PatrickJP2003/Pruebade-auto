import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as epicData from '../../../../public/json/epicData.json';
import { Epic } from './utils/epic';
import * as oficinaData from '../../../../public/json/oficinaData.json';
import { Oficina } from './utils/oficina';
import * as productoData from '../../../../public/json/productoData.json';
import { Producto } from './utils/producto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
epics: Epic[]=(epicData as any).default
oficinas: Oficina[]=(oficinaData as any).default;
productos: Producto[]=(productoData as any).default;

constructor(private router: Router){}

onClickButton():void{
  this.router.navigate(['/productos']);
}
}
