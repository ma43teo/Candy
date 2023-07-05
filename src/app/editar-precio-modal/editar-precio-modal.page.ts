import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-precio-modal',
  templateUrl: './editar-precio-modal.page.html',
  styleUrls: ['./editar-precio-modal.page.scss'],
})
export class EditarPrecioModalPage {
  precio?: number;
  categoria?: string;
  constructor(private modalController: ModalController) {}

  closeModal1() {
    this.modalController.dismiss();
  }
  
  GuardarCambios() {
    console.log('Guardando Cambios...');
    console.log('Categoría:', this.categoria);
    console.log('Precio:', this.precio);
    

    this.modalController.dismiss();
}

}
