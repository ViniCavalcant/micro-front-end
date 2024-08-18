import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partner } from '../models/partner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private apiUrl='https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';

  // getPartners=()=>{
  //   return this.httpClient.get<Partner[]>(this.baseUrl);
  // }
  // getPartnerById=(id:number)=>{
  //   return this.httpClient.get<Partner>(`${this.baseUrl}/${id}`);
  // }

  // addPartner=(partner:Partner)=>{
  //   return this.httpClient.post<Partner>(this.baseUrl,partner);
  // }

  // updatePartner=(partner:Partner)=>{
  //   return this.httpClient.put<any>(`${this.baseUrl}/${partner.id}`,partner);
  // }

  // deletePartner=(id:number)=>{
  //   return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  // }

  constructor(private httpClient: HttpClient) { }

  // getPartners(): Observable<Partner[]>{
  //   return this.httpClient.get<Partner[]>(
  //     'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners'
  //   )
  // }

  getPartners(): Observable<Partner[]>{
    return this.httpClient.get<Partner[]>(this.apiUrl);
  }
}
