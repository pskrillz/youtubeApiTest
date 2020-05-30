import { Component } from '@angular/core';
import { YtubeApiServiceService } from './ytube-api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtubeApi';


  constructor(private youtubeApi: YtubeApiServiceService){}




}
