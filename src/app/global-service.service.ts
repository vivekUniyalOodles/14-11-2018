import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http:HttpClient) { }

  public baseUrl=environment.baseUrl;
  public phpUrl=environment.phpUrl;

  // gloabl GET data function argument 'url' as apidata fetching
  getData(url){
    return this.http.get(this.baseUrl+url);
  }

  // gloabl post data function argument data: as form values (post data), page: url (getting from environment) as apidata fetching
  postData(data,page){
    return this.http.post(this.phpUrl+page,data);
  }
}
