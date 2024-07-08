import { NgModule } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatDivider
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
