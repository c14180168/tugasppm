import { Component } from '@angular/core';
import {GlobSerService} from './glob-ser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datadariglob : any;
  isi = '';
  isi1 : string;
  isi2 : string;
  datatambah : any;

  constructor(private router : Router, public variabelglobal : GlobSerService){
    this.datadariglob = this.variabelglobal.getData();
  }
  ubahdata(){
    this.variabelglobal.setData(this.isi);
    this.datadariglob = this.variabelglobal.getData();
  }
  save(){
    this.datatambah = {
      no : this.isi1,
      isid : this.isi2
    }
    this.datadariglob.push(this.datatambah);
    this.variabelglobal.setData(this.datadariglob);
    this.datadariglob.clear;
    this.datadariglob = this.variabelglobal.getData();
  }

  Input(){
  this.router.navigate(['/input']);
  }
  List(){
  this.router.navigate(['/list']);
  }
  Edit(){
  this.router.navigate(['/edit']);
  }

  name = 'Angular';
}
