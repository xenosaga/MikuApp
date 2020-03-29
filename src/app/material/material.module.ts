import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

const material =
[
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
