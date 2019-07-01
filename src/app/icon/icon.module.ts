import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ IconComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ IconComponent ]
})
export class IconModule { }
