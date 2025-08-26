import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';	
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    
  
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [BrowserModule]
})
export class LoginComponent implements AfterViewInit{
 

  authService = inject(AuthService);
  router = inject(Router);
  _renderer2 = inject(Renderer2);
  _document = inject(DOCUMENT);

  email: string | null = null;
  password: string | null = null;;
  showInvalidToast: boolean = false;

  ngAfterViewInit(): void {
    let script = this._renderer2.createElement('script');
    script.text = `
        {
          Array.from(document.querySelectorAll('.watermarked')).forEach(function(el) {
        el.dataset.watermark = (el.dataset.watermark + ' ').repeat(500);
       
    });
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

  onSubmit() {
   // this.showInvalidToast = true;
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
      .subscribe((user: any) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));          
          this.router.navigate(['admin']);
          //this.router.navigate(["construccion"]);
        } else {
          this.showInvalidToast = true;
          alert("Credenciales Invalidas")
        }
      }, error => {
        this.showInvalidToast = true;
        alert("Credenciales Invalidas" )
        });
    } else {
      alert("Credenciales Invalidas");
    }
  }

}
