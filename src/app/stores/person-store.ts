import { inject, Service, signal } from '@angular/core';
import { PersonService } from '../services/person-service';
import { Person } from '../interface/person';

@Service()
export class PersonStore {
    private service = inject(PersonService);
    private _persons = signal<Person[]>([]);

    persons = this._persons.asReadonly();

    addPerson(per: Person) {
        this.service.addPerson(per).subscribe(() => {
            this._persons.update((p) => [...this.service.getPersons()]);
        })
    }

    delete(code: number) {
        this.service.removePerson(code).subscribe((resp) => {
            this._persons.update(p => [...resp]);
        })
    }

    getId() {
        return this._persons().length + 1;
    }

}
