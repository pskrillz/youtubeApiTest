import { Component, OnInit } from '@angular/core';
import { YtubeApiServiceService } from '../ytube-api-service.service';



// export interface IApiResponse {
//   results: []
// }


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  input: string;
  searchResults: any;
 


  constructor(public ytubeService: YtubeApiServiceService) { }

  ngOnInit(): void {
  }



onClick() {


  this.ytubeService.getYoutube(`${this.input}`).subscribe(
    (data) => { 
    console.log(data)
    this.searchResults = data.items
    })
}







    // this.ytubeService.getYoutube(this.input)
    //  .subscribe(
    //    (response : IApiResponse) => {
    //    this.data = response.results;
    //    console.log(response)
    //    console.log(response.results)
    //    console.log(this.data)
    //   }, err => {
    //     console.log(err)
    //   })





  





}
