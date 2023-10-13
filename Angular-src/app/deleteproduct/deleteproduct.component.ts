import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit


{
  data:any;
   constructor(private s1:DemoService,private r1:Router)
  {
  }
ngOnInit(): void 
{
  let res = this.s1.viewdata1();
  res.subscribe((data1)=>this.data=data1);

}

  deletedata(deleteform:any)
  {

    return this.s1.deletedata1(deleteform.value).subscribe();
  }
}
