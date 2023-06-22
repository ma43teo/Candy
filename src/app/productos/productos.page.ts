import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  searchTerm: string = '';
  categories: string[];
  categoriesMenuOpen: boolean = false;

  constructor(private menuCtrl: MenuController) {
    this.categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
  }

  ngOnInit() {}

  search() {
    console.log('Realizando búsqueda de:', this.searchTerm);
    // Aquí puedes realizar la lógica de búsqueda en función del valor de searchTerm
  }

  goToHome() {
    // Lógica para ir a la página de inicio
  }

  showOffers() {
    // Lógica para mostrar las ofertas
  }

  toggleCategoriesMenu() {
    this.categoriesMenuOpen = !this.categoriesMenuOpen;
    this.menuCtrl.enable(this.categoriesMenuOpen, 'categoriesMenu');
    if (this.categoriesMenuOpen) {
      this.menuCtrl.open('categoriesMenu');
    } else {
      this.menuCtrl.close('categoriesMenu');
    }
  }

  selectCategory(categoria: string) {
    console.log('Categoría seleccionada:', categoria);
    // Realiza aquí la lógica adicional que deseas ejecutar al seleccionar una categoría
  }
}
