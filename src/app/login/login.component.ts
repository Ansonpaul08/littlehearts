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
    anson:{username:"anson",password:"anson1"},
    gopi:{username:"gopi",password:"gopi1"},
    amal:{username:"amal",password:"amal1"}

  }
  constructor() { }
  
  ngOnInit(): void {
  }
  
  login(u:any,p:any){
   var uname=u.value;
   var pass=p.value;
   let user=this.admin;
   if(uname in user){
     if(pass==user[uname]["password"]){
       alert("Login Successful");
     }
     else{
      alert("Invalid Password");
     }
  }
  else{
    alert("Invalid User");
  }
 }
}
