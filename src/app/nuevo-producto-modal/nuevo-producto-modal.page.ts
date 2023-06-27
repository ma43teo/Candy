import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-producto-modal',
  templateUrl: './nuevo-producto-modal.page.html',
  styleUrls: ['./nuevo-producto-modal.page.scss'],
})
export class NuevoProductoModalPage {
  imagen?: string;
  nombre?: string;
  precio?: number;
  descripcion?: string;
  categoria?: string;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  guardarProducto() {
    console.log('Guardando producto...');
    console.log('Imagen:', this.imagen);
    console.log('Nombre:', this.nombre);
    console.log('Precio:', this.precio);
    console.log('Descripción:', this.descripcion);
    console.log('Categoría:', this.categoria);

    this.modalController.dismiss();
  }
}