import { Component, signal } from '@angular/core';
import { Person } from '../../interface/person';
import { PrimengModule } from '../../primeng/primeng-module';
import { Appform } from "../../shared/appform/appform";
import { GridInput } from "../../shared/grid/grid";

@Component({
  imports: [PrimengModule, Appform, GridInput],
  selector: 'app-input',
  templateUrl: './input.html',
})
export class Input {
  private persons = signal<Person[]>([]);

  setPersons($event: Person[]) {
    this.persons.update((a)=> $event);
  }

  getPerson(){
    return this.persons();
  }
}
