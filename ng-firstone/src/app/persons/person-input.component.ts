import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredName = '';
  @Output() personCreate = new EventEmitter<string>();
  onCreatePerson()  {
    console.log('created a new person ' + this.enteredName);
    this.personCreate.emit(this.enteredName);
    this.enteredName = '';
  }
}
