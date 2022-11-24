import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // PRIVATE VARIABLES
  newTodoName: string = '';
  newTodoPriority: string = 'Low';

  // helper funcs
  getPriorityButtonClass(priority:string) {
    return { 
      'btn': true,
      'btn-primary': this.newTodoPriority === priority ,
      'btn-outline-primary': this.newTodoPriority !== priority
    };
  };

  // UI EVENT HANDLERS
  inputHandler($event:InputEvent) {
    console.log(($event.target as HTMLInputElement).value);
  };
  prioritySelected(priority:string) {
    this.newTodoPriority = priority;
  };

}
