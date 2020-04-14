import { Component, OnInit } from '@angular/core';
declare var Arrcountries: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

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

}
