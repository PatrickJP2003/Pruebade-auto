import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  gameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: [''],
      imagen: ['']
    });
  }

  onSubmit() {
    if (this.gameForm.valid) {
      console.log('Formulario enviado:', this.gameForm.value);
    }
  }
}
