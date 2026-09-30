import { Component } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { FormSignal } from "../../shared/form-signal/form-signal";
import { GridSignal } from "../../shared/grid-signal/grid-signal";

@Component({
  imports: [PrimengModule, FormSignal, GridSignal],
  selector: 'app-signal',
  styles: ``,
  templateUrl: './signal.html',
})
export class Signal {

}
