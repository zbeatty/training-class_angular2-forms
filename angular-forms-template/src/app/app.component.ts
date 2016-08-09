import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
// import {FormGroup, FormControl, FormBuilder, Validators, FormArray, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ],
})
export class AppComponent {
  title = 'app works!';
  firstName:string;

  constructor() {
    setTimeout(() => {
      this.firstName = "Buster";
    }, 1000);
  }

  formSubmit(value:any) {
    console.log('submit', value);
  }
}
