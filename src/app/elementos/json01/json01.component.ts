import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json01',
  templateUrl: './json01.component.html',
  styleUrls: ['./json01.component.css']
})
export class Json01Component implements OnInit {
  articulos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://scratchya.com.ar/vue/datos.php")
      .subscribe(
        resultado => {
          this.articulos = resultado;
        }
      );
  }

  

}

