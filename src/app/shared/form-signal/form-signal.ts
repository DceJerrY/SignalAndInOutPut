import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../../interface/person';
import { PrimengModule } from '../../primeng/primeng-module';
import { PersonStore } from '../../stores/person-store';

@Component({
  imports: [PrimengModule, ReactiveFormsModule],
  selector: 'form-signal',
  templateUrl: './form-signal.html',
})
export class FormSignal {
  private storePerson = inject(PersonStore);
  private fb = inject(FormBuilder)

  form = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required]
  })

  add() {
    let per: Person = {
      code:this.storePerson.getId(),
      name: this.form.value.name!,
      lastName: this.form.value.lastName!
    }
    this.storePerson.addPerson(per);
    this.form.reset();
  }
}
