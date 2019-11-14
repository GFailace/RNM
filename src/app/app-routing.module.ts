import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


const routes: Routes = [
  { path: '', component: LocationsComponent },
  { path: 'location-details/:id', component: LocationDetailsComponent },
  { path: 'character-details/:id', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
