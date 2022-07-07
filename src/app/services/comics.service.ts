import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  apiKeyHash: string ="&ts=1&apikey=578c8fdd18a93042c7f7237339ee3755&hash=4bf341d95388114007a7a36d158b4250";
  // https://gateway.marvel.com:443/v1/public/comics/22300?apikey=578c8fdd18a93042c7f7237339ee3755
  baseUrl:string = " https://gateway.marvel.com:443/v1/public/comics";
  constructor(private httpClient: HttpClient) { }

  getComicsById(id:string){
    return this.httpClient.get<any>().toPromise();
  }
}
