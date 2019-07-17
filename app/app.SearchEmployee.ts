import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ShowEmployeeComponent } from './app.showEmployee';
import { EmployeeService } from './app.EmployeeService';

@Component({
    selector:'search-emp',
    templateUrl:'app.search.html'
})

export class SearchEmployeeComponent implements OnInit{
    empId2:number;
    data1:any;
    data2:any;
    emp:any[]=[];
    status:boolean=false;
    constructor(private serve:EmployeeService,private router:Router){}
    
ngOnInit()
{
 this.serve.getAllEmployee().subscribe((data:any)=>this.emp=data);


  /*  let id = this._active.snapshot.params['id'];
    let name = this._active.snapshot.params['name'];
    let salary = this._active.snapshot.params['salary'];
    let depart = this._active.snapshot.params['depart'];*/
  //console.log(id+" "+name+" "+salary+" "+depart)
  //this.empall.push({empId:id,empName:name, })
  //console.log(this.data1);

   //this.data1 = this._active.snapshot.params['id']

}

searchemp()
{ this.status=true;
 
   // this.router.navigate(['show',this.empId2]);
  //this.data1=  this.serve.showEmployee();
  
for(let d in this.emp){
  if(this.emp[d].empId==this.empId2)
  {
    this.router.navigate(['show',this.empId2]);
      this.data2=this.emp[d];
      
  }
  

}

}
}


