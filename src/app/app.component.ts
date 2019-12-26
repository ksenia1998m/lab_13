import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Пользователи';
  firstname_filter: boolean;
  search_firstname = "";
  search_lastname = "";
  lastname_filter: boolean;
  persons: Person[] = [];
  
  constructor() {

  }

  ngOnInit(): void {
    this.persons.push(new Person('Сергей', 'Павлов', '(985) 422-11-72', 1));
  this.persons.push(new Person('Екатерина', 'Иванов', '(985) 587-99-35', 2));
  this.persons.push(new Person('Ирина', 'Белоус', '(918) 488-02-14', 3));
  this.persons.push(new Person('Олег', 'Игонин', '(985) 589-00-59',  4));
  this.persons.push(new Person('Марина', 'Кисилева','(915) 017-81-16',  5));
  }

 


  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) { 
    if (this.persons.length > 0){ 
    let newId = this.persons[this.persons.length - 1].id + 1; 
    person.id = newId; 
    this.persons.push(person); 
    } 
    else { 
    person.id = 1; 
    this.persons.push(person); 
    } 
    }
  
  onDeletePerson(inPerson) {
    this.persons.splice(this.persons.indexOf(inPerson), 1);
  }
  
}
