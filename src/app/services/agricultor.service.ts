import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agricultor } from '../interfaces/agricultor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {
  private appUrl: string;
  private apiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.appUrl = environment.endpoint;
    this.apiUrl = '/agricultores/'
   }

   getAgricultores(): Observable<Agricultor[]> {
    return this.http.get<Agricultor[]>(`${this.appUrl}${this.apiUrl}`)
   }

   getAgricultor(id: number): Observable<Agricultor> {
    return this.http.get<Agricultor>(`${this.appUrl}${this.apiUrl}${id}`)
   }

   addAgricultor(agricultor: Agricultor): Observable<void> {
    return this.http.post<void>(`${this.appUrl}${this.apiUrl}`, agricultor)
   }

   updateAgricultor(id: number, agricultor: Agricultor): Observable<void> {
    return this.http.put<void>(`${this.appUrl}${this.apiUrl}${id}`, agricultor)
   }

   deleteAgricultor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}${id}`)
   }





}
