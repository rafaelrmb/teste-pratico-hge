import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFacilityComponent } from './pages/register-facility/register-facility.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FacilityDetailsComponent } from './pages/facility-details/facility-details.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesComponent,
  },
  {
    path: 'register-facility',
    component: RegisterFacilityComponent,
  },
  {
    path: 'estabelecimento/:cnes',
    component: FacilityDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
