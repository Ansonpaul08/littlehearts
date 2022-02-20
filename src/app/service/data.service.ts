import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  admin:any={
    anson:{username:"anson",password:"anson1"},
    gopi:{username:"gopi",password:"gopi1"},
    amal:{username:"amal",password:"amal1"}
  }
    student:any={
      anson:{name:"abin",age:"2",weight:15,height:1},
      gopi:{name:"kevin",age:"4",weight:14,height:1.5},
      amal:{name:"stan",age:"3",weight:13,height:2}
  }

  constructor() { }
}
