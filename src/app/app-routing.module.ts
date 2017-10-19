import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarWarsComponent } from './star-wars/star-wars.component';
import { peopleComponent } from './people/people.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'star-wars', pathMatch: 'full' },
  { path: 'star-wars', component: StarWarsComponent },
  { path: 'people', component: peopleComponent },
  // { path: 'mixed', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
