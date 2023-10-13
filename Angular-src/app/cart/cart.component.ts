import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


  export class CartComponent implements OnInit {

      data:any;
    constructor(private s1:DemoService,private r1:Router)
    {
    }
  ngOnInit(): void 
  {
    let res = this.s1.viewdata1();
    res.subscribe((data1)=>this.data=data1);
  
  }
  
    insertdata(insertfrom:any)
    {
      console.log(insertfrom);
      return this.s1.insertdata1(insertfrom.value).subscribe();
      
    }
    
    updatedata(updateform:any)
  {
    return this.s1.updatadata1(updateform.value).subscribe();
  }
  
  deletedata(deleteform:any)
  {

    return this.s1.deletedata1(deleteform.value).subscribe();
  }
  
  }
