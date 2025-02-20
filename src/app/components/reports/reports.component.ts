import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, PieController, ArcElement } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, PieController, ArcElement);

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ReportsComponent implements AfterViewInit{
  ngAfterViewInit() {
    this.renderOccupancyChart();
    this.renderStockChart();
    this.renderFinanceChart();
  }

  renderOccupancyChart() {
    const ctx = document.getElementById('occupancyChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Occupancy Rate',
            data: [70, 80, 75, 90, 85],
            backgroundColor: '#f70aeb',
          },
        ],
      },
    });
  }

  renderStockChart() {
    const ctx = document.getElementById('stockChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Stock Movements',
            data: [100, 120, 95, 110, 105],
            borderColor: '#4caf50',
            fill: false,
          },
        ],
      },
    });
  }

  renderFinanceChart() {
    const ctx = document.getElementById('financeChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Income', 'Expenses'],
        datasets: [
          {
            data: [5000, 2000],
            backgroundColor: ['#2196f3', '#f44336'],
          },
        ],
      },
    });
  }
}
