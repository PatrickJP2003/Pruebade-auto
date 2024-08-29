import { Component } from '@angular/core';
import * as equipoData from '../../../../public/json/equipoData.json';
import { Equipo } from '../home/utils/equipo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  equipos: Equipo[]=(equipoData as any).default;
}
