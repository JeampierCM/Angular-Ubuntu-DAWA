import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {
   text: string = 'Es valido el fomulario?:'
  @Input() formParent: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
