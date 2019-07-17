import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { EADDRINUSE } from 'constants';
import { ShowEmployeeComponent } from './app.showEmployee';
@Injectable({
    providedIn:'root'
})

export class EmployeeService
{ data:any[]=[];
    constructor(private http:HttpClient){}
    getAllEmployee():any{
        /*if(this.eadd.length == 0){
            this.http.get<any>("assets/assets.employee.json").subscribe(
                (data)=>this.eadd = data
            )
            return this.eadd
        }else{
            return this.eadd
        }*/
   return this.http.get("assets/assets.employee.json")
        // return  this.http.get<this.data[]>("assets/assets.employee.json")
        //console.log(this.data)
       // return this.data
    }
    
    
   
   
    
}
