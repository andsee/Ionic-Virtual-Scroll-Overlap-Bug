import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { DynamicOneComponent } from '../dynamic-one/dynamic-one.component';

@NgModule({
  declarations: [DynamicComponent, DynamicOneComponent],
  imports: [
    CommonModule
  ],
  exports:
  [DynamicComponent, DynamicOneComponent],
  entryComponents:
  [DynamicComponent, DynamicOneComponent]
})
export class ComponentsModule { }
