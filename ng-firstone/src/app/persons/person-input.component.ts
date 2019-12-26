import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent{
  enteredName ='';
  onCreatePerson(){
    console.log('created a new person '+ this.enteredName);
    this.enteredName = '';
  }
}
