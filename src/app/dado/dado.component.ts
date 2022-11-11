import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  //@Input() valor: string="";
  @Input() valor: number=1;
  //valor: number=1;
  constructor() { }

  ngOnInit() {
    //this.valor = Math.trunc(Math.random() * 6) + 1;
  }

}
