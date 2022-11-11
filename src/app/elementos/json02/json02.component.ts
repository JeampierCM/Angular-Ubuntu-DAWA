import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json02',
  templateUrl: './json02.component.html',
  styleUrls: ['./json02.component.css']
})
export class Json02Component implements OnInit {

  //https://api.covid19api.com/summary

  paises: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.covid19api.com/summary")
      .subscribe(
        resultado => {
          this.paises = resultado;
          
        }
      );
  }

}
