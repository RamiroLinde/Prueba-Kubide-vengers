import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //MD5 Hash -> https://www.md5hashgenerator.com/
  apiKeyHash: string ="&ts=1&apikey=578c8fdd18a93042c7f7237339ee3755&hash=4bf341d95388114007a7a36d158b4250";
  baseUrl:string = "https://gateway.marvel.com:443/v1/public/characters";
  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any>{
    return this.httpClient.get<any>(`${this.baseUrl}?offset=avengers${this.apiKeyHash}`).toPromise();
  }

  getHeroById(id:number){
    return this.httpClient.get<any>(`${this.baseUrl}/${id}?${this.apiKeyHash}`).toPromise();
  }
}
