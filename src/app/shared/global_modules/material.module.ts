import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSelectModule, MatFormFieldModule, MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSelectInfiniteScrollModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSelectInfiniteScrollModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule {}