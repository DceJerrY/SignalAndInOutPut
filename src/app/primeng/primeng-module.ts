import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  exports: [
    ButtonModule,
    DividerModule,
    FieldsetModule,
    FloatLabelModule,
    InputTextModule,
    SelectModule,
    TableModule,
    TooltipModule
  ],
})
export class PrimengModule {

}
