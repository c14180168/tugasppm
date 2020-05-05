import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobSerService} from '../glob-ser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  datadariglob : any;
  isi1 : any;
  isi2 :any;
  ind : any;
  datatambah: any;

  constructor(private route:ActivatedRoute, public variabelglobal : GlobSerService) { 
    this.datadariglob = this.variabelglobal.getData();
  }

  Save(){

    this.datatambah={
      jur : this.isi1,
      des : this.isi2
    }
    this.datadariglob[this.ind] = this.datatambah
}

  ngOnInit() {
  }

}