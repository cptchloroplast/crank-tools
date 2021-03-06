/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <mat-card>
      <div fxLayout="row" fxLayoutAlign="start center">
          <img mat-card-avatar src="./assets/img/about.png">
          <mat-card-title [style.margin-bottom]="0" [style.margin-left.px]="16" >About</mat-card-title>
      </div>
      <hr>
      <mat-card-content>
          <p>
              Crank Tools is open-source bike shop software. It is a complete rewrite and reimagining of
              a previous project of mine, Bike Math, and while just a simple bicycle calculator at the 
              moment, I plan on developing several other modules with the intention of making Crank Tools 
              a complete application for all your shop needs. Planned features include and are not limited 
              to:
          </p>
          <ul>
              <li>Service Scheduler</li>
              <li>Inventory Management</li>
              <li>Register and Receipts</li>
              <li>Customer Database</li>
              <li>Wheel Builder</li>
          </ul>
          <p>
              Crank Tools is being developed in my free time and something that I plan to use in the future 
              when I open my own shop, so if you have any suggestions or questions, please feel free to 
              send me an email at <a href="mailto:ben@okkema.org">ben@okkema.org</a> because I am always 
              looking for ways to make Crank Tools better. You can follow the development of the project 
              over on my blog at <a href="https://ben.okkema.org" target="_blank">ben.okkema.org</a> or take 
              a peak at the source code on 
              <a href="https://github.com/cptchloroplast/crank-tools" target="_blank">Github</a>.
          </p>
          <p>
              Crank Tools is dedicated to "El Luchito" and the horrendous software we were forced to use. 
          </p>
      </mat-card-content>
    </mat-card>
  `,
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
