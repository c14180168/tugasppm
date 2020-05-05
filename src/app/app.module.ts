import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobSerService } from './glob-ser.service';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { InputComponent } from './input/input.component';

const ROUTES : Routes =[
  
 {path:'home/:id', component: ListComponent},
 {path:'list', component: ListComponent},
 {path:'input', component: InputComponent},
 {path:'edit',component:EditComponent} 
]

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule, 
                  RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, ListComponent, EditComponent, InputComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobSerService]
})
export class AppModule { }
