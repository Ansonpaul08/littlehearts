import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Where Your Kids Shines"
  pass="Enter Password";
  uname="";
  admin:any={
    anson:{username:"anson",password:"anson1"}
  }
  constructor() { }

  ngOnInit(): void {
  }
  unamechange(event:any){
    this.uname=event.target.value;
    console.log(this.uname);
  }
  passchange(event:any){
    this.pass=event.target.value;
    console.log(this.pass);
  }
  login()
  {
    var uname=this.uname;
    var pass=this.pass;
    let user=this.admin;
    if(uname in user){
      if(pass==user[uname]["password"]){
        alert("Login Successful")
      }
      else{
        alert("Invalid Password");
      }
    }
    else{
      alert("Invaild User");
    }
  }
}
