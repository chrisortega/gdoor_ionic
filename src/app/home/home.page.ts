import { Component } from '@angular/core';
import { DoorService } from '../api/door.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public door_service:DoorService) {}


  abre(){
    this.door_service.toggle().subscribe(data=>{console.log(data)})
  }
  alto(){
    this.door_service.panic().subscribe(data=>{console.log(data)})
  }

  calibrar(){
    this.door_service.calibrate().subscribe(data=>{console.log(data)})
  }

}
