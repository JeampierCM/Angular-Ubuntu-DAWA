import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formParent: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initFormParent()
  }

  initFormParent(): void {
    this.formParent = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(5)]),
        skills: new FormArray([], [Validators.required])
      }
    )
  }

  initFormSkill(): FormGroup {
    return new FormGroup(
      {
        lenguaje: new FormControl('', [Validators.required]),
        projectUrl: new FormControl(''),
        expYear: new FormControl('', [Validators.required])
      } 
    )
  }

  addSkill(): void {
    if (this.formParent.get('skills')?.value.length > 1) {
      if (confirm('Desea agregar otro skill?')) {
        const refSkills = this.formParent.get('skills') as FormArray;
      refSkills.push(this.initFormSkill())
      }
    }else{
      const refSkills = this.formParent.get('skills') as FormArray;
      refSkills.push(this.initFormSkill())
    }
  }

  removeSkill(index: number): void {
    const refSkills = this.formParent.get('skills') as FormArray;
    refSkills.removeAt(index)
  }

  getCtrl(key: string, form: FormGroup): any {
    return form.get(key)
  }

  comprobarFormulario(): void {
    console.log(this.formParent)
    if (this.formParent.valid) {
      alert('Formulario correcto')
    }else{
      alert('Formulario incorrecto')
    }
  }

  resetFormulario(): void {
    this.formParent.reset()
  }

  enviarFormulario(): void {
    if (this.formParent.valid) {
      alert('Formulario enviado correctamente')
    }else{
      alert('Formulario incorrecto')
      this.formParent.reset()
    }
  }  

}
