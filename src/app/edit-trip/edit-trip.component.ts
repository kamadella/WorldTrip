import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/trip';
import { TripService } from '../trip.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  formModel!: FormGroup;
  tripId:number = -1;

  constructor(private tripService: TripService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params=> this.tripId = params['id']);

    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      pictures: new FormControl('',[Validators.required]),
    });
  }




  get name(){
    return this.formModel.get('name');
  }

  get startDate(){
    return this.formModel.get('startDate');
  }

  get endDate(){
    return this.formModel.get('endDate');
  }

  get description(){
    return this.formModel.get('description');
  }

  get pictures(){
    return this.formModel.get('pictures');
  }


  editTrip() {
    console.log(this.tripId);
    let trip = {
      id: this.tripId,
      name: this.formModel.value.name,
      date_start: this.formModel.value.startDate,
      date_end: this.formModel.value.endDate,
      description: this.formModel.value.description,
      pictures: this.formModel.value.pictures
    }
    console.log("editTrip")
    console.warn(this.formModel.value);

    this.tripService.editTrip(trip).subscribe();
  }

}
