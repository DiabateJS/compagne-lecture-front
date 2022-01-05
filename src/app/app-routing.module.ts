import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CampagnesComponent} from './campagnes/campagnes.component';
import {NouvelleCampagneComponent} from './nouvelle-campagne/nouvelle-campagne.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'campagnes',
    component: CampagnesComponent
  },
  {
    path: 'nouvelle-campagne',
    component: NouvelleCampagneComponent
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
