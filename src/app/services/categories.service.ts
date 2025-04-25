import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = environment.apiUrl;
  private categoriesUrl = `${this.apiUrl}/categories`;
  private http = inject(HttpClient);

  constructor() { }

  findAllCategories() {
    return this.http.get<any[]>(this.categoriesUrl);
  }

}
