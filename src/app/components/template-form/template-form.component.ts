import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.class';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    phone: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmitFrom(frmUser: NgForm) {

    if (frmUser.valid) {
      
    }
  }
  onResetForm(frmUser: NgForm) {
    frmUser.reset();
  }


  public abc: string = '123';
}
