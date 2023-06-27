import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevoProductoModalPage } from '../nuevo-producto-modal/nuevo-producto-modal.page';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage {
  categoriaSeleccionada: string = 'categorias';

  constructor(private modalController: ModalController) {}
  async openModal() {
    const modal = await this.modalController.create({
      component: NuevoProductoModalPage,
      cssClass: 'my-custom-modal' 
    });
  
    return await modal.present();
  }
}
