import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <mat-card>
      <div fxLayout="row" fxLayoutAlign="start center">
          <img mat-card-avatar src="./assets/img/inventory.png">
          <mat-card-title [style.margin-bottom]="0" [style.margin-left.px]="16" >Inventory Management</mat-card-title>
      </div>
      <hr>
      <mat-card-content></mat-card-content>
    </mat-card>
  `,
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
