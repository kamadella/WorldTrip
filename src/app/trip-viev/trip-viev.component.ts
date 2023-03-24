import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/trip';
import { TripService } from '../trip.service';


@Component({
  selector: 'app-trip-viev',
  templateUrl: './trip-viev.component.html',
  styleUrls: ['./trip-viev.component.css']
})
export class TripVievComponent implements OnInit {
  tripId:number = -1;
  trips: Trip[]=[];

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params=> this.tripId = params['id']);
    this.tripService.getTrips().subscribe(data=>this.trips=data);
  }

}
