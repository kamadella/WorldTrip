import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from 'src/trip';


@Component({
  selector: 'app-list-of-trips',
  templateUrl: './list-of-trips.component.html',
  styleUrls: ['./list-of-trips.component.css']
})
export class ListOfTripsComponent implements OnInit {
  trips: Trip[]=[];

  searchText = '';
  term = '';

  constructor(private tripService: TripService) {

  }

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(data=>this.trips=data);
  }

  onDelete(id:number){
    //window.location.reload();
    console.log(id);
    if(confirm("Are you sure to delete? ")){
      this.tripService.deleteTrip(id).subscribe();
    }

  }



}
