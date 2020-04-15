import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
declare var Arrcountries: any;

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    //console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstNamePattern: any = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  lastNamePattern: any = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  mailPattern: any = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
  phonePattern: any = /^((\+?34([ \t|\-])?)?[9|6|7]((\d{1}([ \t|\-])?[0-9]{3})|(\d{2}([ \t|\-])?[0-9]{2}))([ \t|\-])?[0-9]{2}([ \t|\-])?[0-9]{2})$/;
  dniPattern: any = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  passwordPattern: any =  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  createFormGroup(){
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(this.firstNamePattern)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(this.lastNamePattern)]),
      mail: new FormControl('', [Validators.required, Validators.pattern(this.mailPattern)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
      dni: new FormControl('', [Validators.required, Validators.pattern(this.dniPattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmPassword: new FormControl('', [Validators.required, passwordMatchValidator('password')]),
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      zip: new FormControl(''),
      message: new FormControl('', [Validators.requiredTrue])
    });
  }

  contactForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {

      //Show o Hidden Password
      document.getElementById("openEyeP").onclick = function(){
          document.getElementById("openEyeP").style.display="none";
          document.getElementById("closedEyeP").style.display="block";
          (<HTMLInputElement>document.getElementById("inputPassword4")).type="text";
      }
      document.getElementById("closedEyeP").onclick = function(){
          document.getElementById("closedEyeP").style.display="none";
          document.getElementById("openEyeP").style.display="block";
          (<HTMLInputElement>document.getElementById("inputPassword4")).type="password";
      }
      document.getElementById("openEyeRP").onclick = function(){
          document.getElementById("openEyeRP").style.display="none";
          document.getElementById("closedEyeRP").style.display="block";
          (<HTMLInputElement>document.getElementById("inputConfirmPassword4")).type="text";
      }
      document.getElementById("closedEyeRP").onclick = function(){
          document.getElementById("closedEyeRP").style.display="none";
          document.getElementById("openEyeRP").style.display="block";
          (<HTMLInputElement>document.getElementById("inputConfirmPassword4")).type="password";
      }

      var objCountries= JSON.parse(Arrcountries);
      for ( var i=1 ; i< objCountries.countries.length ; i++){
        document.getElementById("selectCountry").innerHTML += '<option value="'+(i)+'">'+objCountries.countries[i].name+'</option>';
      }

  }

  onResetForm(){
     this.contactForm.reset();
  }

  onSaveForm(){
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log("Valid");

    } else {
       console.log("Not Valid");
    }
  }

  get firstName() { return this.contactForm.get('firstName');}
  get lastName() { return this.contactForm.get('lastName');}
  get mail() { return this.contactForm.get('mail');}
  get phone() { return this.contactForm.get('phone');}
  get dni() { return this.contactForm.get('dni');}
  get password() { return this.contactForm.get('password');}
  get confirmPassword() { return this.contactForm.get('confirmPassword');}
  get message() { return this.contactForm.get('message');}

}
