import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-manage-stock',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ],
  templateUrl: './manage-stock.component.html',
  styleUrl: './manage-stock.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ManageStockComponent {
  stock = [
    { name: 'Agua', quantity: 100, dailyConsumption: 20 },
    { name: 'Coca Cola', quantity: 50, dailyConsumption: 10 },
    { name: 'Papas Fritas', quantity: 30, dailyConsumption: 5 },
    { name: 'Frutos secos', quantity: 30, dailyConsumption: 5 },
  ];

  editingProduct: any = null;

  addProduct() {
    this.editingProduct = { name: '', quantity: 0, dailyConsumption: 0 };
  }

  editProduct(product: any) {
    this.editingProduct = { ...product };
  }

  saveProduct() {
    if (!this.stock.includes(this.editingProduct)) {
      this.stock.push(this.editingProduct);
    }
    this.editingProduct = null;
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  removeProduct(product: any) {
    this.stock = this.stock.filter(p => p !== product);
  }
}
