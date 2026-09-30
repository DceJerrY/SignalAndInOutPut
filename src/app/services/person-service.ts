import { Service } from '@angular/core';
import { Person } from '../interface/person';
import { of } from 'rxjs';

@Service()
export class PersonService {
    private persons: Person[] = []

    addPerson = (per: Person) => of(this.persons.push(per));


    removePerson = (code: number) => of(this.persons = this.persons.filter(p => p.code != code));

    getPersons = () => this.persons;
}
