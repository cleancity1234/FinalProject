import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private s1:DemoService, private r1:Router) 
  { }
       user :User = new User();
  ngOnInit(): void {
  }
     link:string="";
          logindata()
          {
              this.s1.logindata1(this.user).subscribe( data=>
               {this.link="/login",alert("login Successful"),this.r1.navigate(["/cart"])},
               error=>alert("invalid id/pswd")
              );
          }
}


