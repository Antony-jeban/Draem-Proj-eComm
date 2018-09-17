import { Component, OnInit } from '@angular/core';
import {myservice} from '../../services/myservice.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  // styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  counter:number;
  constructor(private myservice:myservice) {
    this.counter = 99;
   }

  ngOnInit() {
  }
  count(){
    this.counter--
  }
callservice(id,name,price,desc,url)
{

this.myservice.called(id,name,price,desc,url);
}
}
