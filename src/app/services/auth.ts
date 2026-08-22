import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);
  
  // Cambiamos la URL absoluta por relativa para que pase por el Proxy de Angular
  private baseUrl = '/api/method';

  login(usr: string, pwd: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/login`,
      { usr, pwd },
      { withCredentials: true }
    );
  }

  getLoggedUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/frappe.auth.get_logged_user`, {
      withCredentials: true
    });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
  }
}