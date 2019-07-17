import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import {ShowEmployeeComponent} from './app.showEmployee';
import { SearchEmployeeComponent } from './app.SearchEmployee';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { MyPipe } from './app.MyPipe';
import { HttpModule } from '@angular/http';


const routes:Routes =[
    {path:'show',component:ShowEmployeeComponent},
    {path:'show/:id',component:ShowEmployeeComponent},
    {path:'search',component:SearchEmployeeComponent}
];
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(routes),HttpModule
        
    ],
    declarations: [
        AppComponent,ShowEmployeeComponent,SearchEmployeeComponent,MyPipe
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }