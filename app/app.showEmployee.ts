import {Component, OnInit} from '@angular/core';
import { EmployeeService } from './app.EmployeeService';
import {ActivatedRoute,Params} from '@angular/router'
@Component({
    selector:'show-emp',
    templateUrl:'app.show.html'
})
export class ShowEmployeeComponent implements OnInit{

constructor(private myservice:EmployeeService,private _active:ActivatedRoute){}

empall:any[]=[];
data1:any=null;
empId:number;
empName:string;
empSalary:string;
empDepartment:string;
status:boolean=false;
ind:any;
ngOnInit()
{
 this.myservice.getAllEmployee().subscribe((data:any)=>this.empall=data);


  /*  let id = this._active.snapshot.params['id'];
    let name = this._active.snapshot.params['name'];
    let salary = this._active.snapshot.params['salary'];
    let depart = this._active.snapshot.params['depart'];*/
  //console.log(id+" "+name+" "+salary+" "+depart)
  //this.empall.push({empId:id,empName:name, })
  //console.log(this.data1);

   this.data1 = this._active.snapshot.params['id']
   
}
showEmployee()
{
    return this.empall;
}
ondelete(data:any)
{
    this.empall.splice(data,1);
}
onupdate(data:any)
{
    this.status=true;
this.ind=data;

}
Update()
{
    this.empall.splice(this.ind,1,{empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
    this.empId=null;
    this.empName=null;
    this.empSalary=null;
    this.empDepartment=null;
}

}