import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YtubeApiServiceService {

  constructor(private http: HttpClient) { }

apiKey: string ;
// key removed


getYoutube(query): Observable<any> {
  const url = `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${this.apiKey}`
  return this.http.get<any>(url)
}



}
