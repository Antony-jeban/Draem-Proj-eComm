import { Injectable } from '@angular/core';

@Injectable()
export class myservice {
  array:any[];
  constructor() { }
called(id,name,price,desc,url)
{
this.array=[id,name,price,desc,url]
console.log(this.array);
}

}
