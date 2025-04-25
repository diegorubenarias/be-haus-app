import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl
  private http = inject(HttpClient);

  constructor() { }

  login(email: string, password: string): Observable<any>  {
    return this.http.post(`${this.apiUrl}/user/login`, { email, password });
  }
}
