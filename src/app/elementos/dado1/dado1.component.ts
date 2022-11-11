import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado1',
  templateUrl: './dado1.component.html',
  styleUrls: ['./dado1.component.css']
})
export class Dado1Component implements OnInit {

  @Input() valor: number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
