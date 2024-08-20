import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExternalCompanies } from '../models/external-companies';

@Injectable({
  providedIn: 'root'
})
export class ExternalCompaniesService {

  private apiUrl='https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies';

  constructor(private httpClient: HttpClient) { }

  getExternalCompanies(): Observable<ExternalCompanies[]>{
    return this.httpClient.get<ExternalCompanies[]>(this.apiUrl);
  }

  editExternalCompanies(id: number, externalCompanies: ExternalCompanies): Observable<ExternalCompanies> {
    return this.httpClient.put<ExternalCompanies>(`${this.apiUrl}/${id}`, externalCompanies);
  }  

  deleteExternalCompanies(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}