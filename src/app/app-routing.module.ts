import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfTripsComponent } from './list-of-trips/list-of-trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { TripVievComponent } from './trip-viev/trip-viev.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list-of-trips', component: ListOfTripsComponent },
  { path: 'new-trip', component: NewTripComponent },
  { path: 'edit/:id', component: EditTripComponent },
  { path: 'viev/:id', component: TripVievComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
