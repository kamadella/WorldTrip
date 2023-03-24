import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListOfTripsComponent } from './list-of-trips/list-of-trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { TripVievComponent } from './trip-viev/trip-viev.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListOfTripsComponent,
    NewTripComponent,
    EditTripComponent,
    TripVievComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
