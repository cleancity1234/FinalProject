import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  link1 ="http://localhost:9001/productinsert";
  link2 ="http://localhost:9001/productupdate";
  link3 ="http://localhost:9001/productdelete";
  link4 ="http://localhost:9001/productview";
  link5 = "http://localhost:9001/login";
  link7 = "http://localhost:9001/contact";

  constructor(private h1:HttpClient) { }

  insertdata1(data:any)
  {

    return this.h1.post(this.link1,data);
  }

  updatadata1(data:any)
  {

    return this.h1.post(this.link2,data);
  }

  deletedata1(data:any)
  {

    return this.h1.post(this.link3,data);
  }

  viewdata1()
  {

    return this.h1.get(this.link4);
  }

  logindata1(user:User) :Observable<object>
  {
     return this.h1.post(`${this.link5}`,user);
  }
contactdata(data:any)
{
return this.h1.post(this.link7,data);
}
}