import { Component, inject } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { PersonStore } from '../../stores/person-store';

@Component({
  imports: [PrimengModule],
  selector: 'grid-signal',
  templateUrl: './grid-signal.html',
})
export class GridSignal {
  storePerson = inject(PersonStore);

  delete(code:number) {
    this.storePerson.delete(code);
  }
}
