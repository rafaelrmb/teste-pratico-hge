import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFacilityComponent } from './pages/register-facility/register-facility.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesComponent,
  },
  {
    path: 'register-facility',
    component: RegisterFacilityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
