import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobSerService} from '../glob-ser.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  datadariglob : any;
  isi1 : any;
  isi2 : any;
  datatambah : any;

  constructor(private route:ActivatedRoute, public variabelglobal : GlobSerService) { 
    this.datadariglob = this.variabelglobal.getData();
  }

  Save(){
    this.datatambah = {
      jur : this.isi1,
      des : this.isi2
    }
    this.datadariglob.push(this.datatambah);
    this.variabelglobal.setData(this.datadariglob);
    this.datadariglob.clear;
    this.datadariglob = this.variabelglobal.getData();
  }
  ngOnInit() {
  }

}