import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data = [];
  public getData(){
    return this.Data;
  }

  public setData(databaru){
    this.Data = databaru;
  }
  constructor() { }

}