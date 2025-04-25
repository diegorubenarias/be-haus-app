import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  constructor() { }

  getRooms() {
    return this.http.get(`${this.apiUrl}/rooms`);
  }
}
