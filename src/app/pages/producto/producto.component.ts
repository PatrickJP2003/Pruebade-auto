import { Component } from '@angular/core';
import * as productoData from '../../../../public/json/productoData.json';
import { ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';
import { Producto } from '../home/utils/producto';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto?: Producto;
  id: number = 0;
  constructor(private route: ActivatedRoute) {

  }
  
  ngOnInit(): void {
     this.route.paramMap.subscribe(
      (params)=>{
        this.id = Number (params.get('id'));
      }
    );
    this.producto= ((productoData as any).default as Producto[]).find((producto) => producto.id === this.id)!;
  }
  
  }
  
