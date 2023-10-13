import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit
{

  
    constructor(private s1:DemoService)
    {
    }
  ngOnInit(): void 
  {  
  }
  
    insertdata(insertfrom:any)
    {
    
      return this.s1.insertdata1(insertfrom.value).subscribe();
      
    }

}








  

    