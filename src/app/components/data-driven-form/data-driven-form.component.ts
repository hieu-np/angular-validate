import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven-form',
  templateUrl: './data-driven-form.component.html',
  styleUrls: ['./data-driven-form.component.css']
})
export class DataDrivenFormComponent implements OnInit {

  public frmUserData!: FormGroup;
  
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.frmUserData = this._formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$"),
        Validators.minLength(8)
      ]],
      fullname: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('[0][0-9]{9}')
      ]]
    })

    this.frmUserData.valueChanges.subscribe(
      data => {        
      }
    )
  }

  onSubmitForm(){    
  }

  onResetForm(){
    this.frmUserData.reset();
  }

}
