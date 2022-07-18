import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "Todo list";
  list:any[]=[];

  addTask(item){
    this.list.push({id:this.list.length, name:item})
    
  }

  removeTask(id){
    this.list=this.list.filter(item => item.id!==id)
  }

}
