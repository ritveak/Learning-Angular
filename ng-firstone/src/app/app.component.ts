import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-firstone';
  persons = ['Max', 'Man', 'Mona'];

  onPersonCreated( name: string) {
    this.persons.push(name);
  }
}
