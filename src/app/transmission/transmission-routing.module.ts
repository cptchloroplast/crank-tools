import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransmissionComponent } from './transmission.component';

const routes: Routes = [
  {
    component: TransmissionComponent,
    path: 'transmission',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class TransmissionRoutingModule { }
