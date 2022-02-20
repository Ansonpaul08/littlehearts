import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Where Your Kids Shines"
  uname="";
  pass="Enter Password";

  constructor(private router:Router,private dataservice:DataService) { }
  
  ngOnInit(): void {
  }
  
  login(){
   var uname=this.uname;
   var pass=this.pass;
   let user=this.dataservice.admin;
   if(uname in user){
     if(pass==user[uname]["password"]){
       alert("Login Successful");
       this.router.navigateByUrl("dash");
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
