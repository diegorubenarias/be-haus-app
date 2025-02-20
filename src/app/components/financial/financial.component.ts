import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FinancialComponent {
  transactions = [
    { date: '2025-01-20', description: 'Room Booking - Suite 101', type: 'Income', amount: 200 },
    { date: '2025-01-19', description: 'Purchased Soda for Stock', type: 'Expense', amount: 50 },
    { date: '2025-01-18', description: 'Room Booking - Deluxe 202', type: 'Income', amount: 300 },
    { date: '2025-01-17', description: 'Snacks for Stock', type: 'Expense', amount: 30 },
  ];

  get totalIncome() {
    return this.transactions
      .filter(transaction => transaction.type === 'Income')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  get totalExpenses() {
    return this.transactions
      .filter(transaction => transaction.type === 'Expense')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  get netBalance() {
    return this.totalIncome - this.totalExpenses;
  }
}
