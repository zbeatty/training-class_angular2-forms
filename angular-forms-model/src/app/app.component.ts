import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  myForm: FormGroup;
  address: FormArray;

  constructor(private fb: FormBuilder) { }

  // myForm = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   userName: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     zip: new FormControl()
  //   })
  // });
  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, this.firstNameValidator])],
      lastName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      address: this._buildArray()
    });

    // form changes
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('myForm changed to:', form);
      }
    );

    // FormControl changes
    this.myForm.controls['firstName'].valueChanges.subscribe(
      (value: string) => {
        console.log('firstName changed to:', value);
      }
    );
  }

  add() {
    this.address.push(this._buildGroup());
  }

  ////////////////////////////////////////
  firstNameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^ABC/)) {
      return { invalidName: true };
    }
  }

  _buildArray(): FormArray {
    this.address = this.fb.array([
      this._buildGroup()
    ]);
    return this.address;
  }

  _buildGroup(): FormGroup {
    return this.fb.group({
      street: '',
      city: '',
      state: 'NY',
      zip: ''
    });
  }
}