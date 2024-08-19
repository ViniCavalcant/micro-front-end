import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from '../models/partner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private apiUrl='https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';

  constructor(private httpClient: HttpClient) { }

  getPartners(): Observable<Partner[]>{
    return this.httpClient.get<Partner[]>(this.apiUrl);
  }

  editPartner(id: string, partner: Partner): Observable<Partner> {
    return this.httpClient.put<Partner>(`${this.apiUrl}/${id}`, partner);
  }  

  deletePartner(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}