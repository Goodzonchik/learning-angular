import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaunchComponent } from './launch/launch.component';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
  },
  {
    path: ':flight_number',
    component: LaunchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}
