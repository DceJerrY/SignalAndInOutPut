import { Component, inject, output } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../interface/person';
import { PersonService } from '../../services/person-service';

@Component({
  imports: [PrimengModule, ReactiveFormsModule],
  selector: 'appform',
  styles: ``,
  templateUrl: './appform.html',
})
export class Appform {
  private fb = inject(FormBuilder)
  private service = inject(PersonService);
  persons: Person[] = [];

  outPersons = output<Person[]>()

  form = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required]
  })



  add() {
    let per: Person = {
      code: this.service.getPersons().length + 1,
      name: this.form.value.name!,
      lastName: this.form.value.lastName!
    }
    this.service.addPerson(per).subscribe(() => {
      this.persons = [...this.service.getPersons()];
      this.outPersons.emit(this.persons);
      this.form.reset();
    });
  }


}
