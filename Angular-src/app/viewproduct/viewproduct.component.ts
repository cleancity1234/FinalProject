import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{


  data:any;
constructor(private s1:DemoService,private r1:Router)
{
}
ngOnInit(): void 
{
let res = this.s1.viewdata1();
res.subscribe((data1)=>this.data=data1);

}
}