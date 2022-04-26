import { Component, OnInit } from '@angular/core';
import { iUser } from '../Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person:iUser = {
    email:'',
    pswd:'',
    cat:''
  }
  
  cats = ["Buyer","Seller","WholeSeller" ]

  constructor() { }

  ngOnInit(): void {
  }

  submit(formValues : any){
    // R-8
    console.log(formValues);
  }
}
