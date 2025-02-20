import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdminDashboardComponent implements AfterViewInit {

  router = inject(Router);
   _renderer2 = inject(Renderer2);
    _document = inject(DOCUMENT);

  ngAfterViewInit(): void {
    let script = this._renderer2.createElement('script');
    script.text = `
        {
          Array.from(document.querySelectorAll('.dashboard-ma')).forEach(function(el) {
        el.dataset.watermark = (el.dataset.watermark + ' ').repeat(200);
       
    });
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }


  navigateTo(path: string) {
    this.router.navigate([path]);
  } 
}
