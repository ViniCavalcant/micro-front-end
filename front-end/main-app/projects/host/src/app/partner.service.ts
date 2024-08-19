import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  apiUrl = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners'

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPartners(){
    console.log(this.apiUrl)
    return this.httpClient.get(this.apiUrl)
  }
}
