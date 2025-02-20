import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): object {
    if(email.includes("admin")) {
      return {
        name: 'Admin',
        rol: 'admin'
      };
    } else {
      return {
        name: 'User',
        rol: 'user'
      };
    }
  }
}
