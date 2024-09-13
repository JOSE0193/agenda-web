import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent implements OnInit {

  @Input() label!: string;
  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(){
  }

  get errorMessage(){
    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched || this.control.dirty) {
          return FormValidations.getErrorMsg(this.label, propertyName,
            this.control.errors[propertyName]
            );
        }
    }
    return null;
  }

}
