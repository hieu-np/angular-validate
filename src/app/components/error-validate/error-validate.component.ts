import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('control') control: any;

  get message(): any {
    //err là key của lỗi, ví dụ minlength, patern, maxlength
    for(let err in this.control.errors){
      console.log(this.control);
      
      if(this.control.dirty){
        return this.getErrorMaessage(err, this.control.errors[err])
      }
    }
  }
 
  messages: {[err: string]: string} = {}; 

  getErrorMaessage(err: string, value: any) {
    this.messages = {
      'required': 'required',
      'minlength': `Minlength: ${value.requiredLength} character`,
      'maxlength': `Maxlength: ${value.requiredLength} character`,
      'pattern': `Không đúng định dạng`
    }
    return this.messages[err];
  }
  

}
