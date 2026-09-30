import { CommonModule } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { Person } from '../../interface/person';
import { PrimengModule } from '../../primeng/primeng-module';
import { PersonService } from '../../services/person-service';

@Component({
  imports: [PrimengModule, CommonModule],
  selector: 'grid-input',
  styles: ``,
  templateUrl: './grid.html',
})
export class GridInput {
  persons = model.required<Person[] | []>();
  private service = inject(PersonService);

  delete(code:number) {
    console.log(code);
    this.service.removePerson(code).subscribe((resp)=>{
      this.persons.set(resp);
    })  
  }
}
