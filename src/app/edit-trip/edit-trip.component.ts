import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/trip';
import { Router } from '@angular/router';
import { TripService } from '../trip.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  formModel!: FormGroup;
  tripId:number = -1;
  trip: any = {};

  constructor(private tripService: TripService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params=> this.tripId = params['id']);

    this.formModel = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      description: new FormControl(),
      pictures: new FormArray([
        new FormControl(),
      ]),
    });

    this.http.get(`http://localhost:3000/trips/${this.tripId}`).subscribe((trip: any) => {
      this.trip = trip;


        for (let pic of trip.pictures){
          console.log(pic);
          this.pictures.push(new FormControl(''));

        }

      console.log(this.formModel.value.pictures);


      this.formModel.patchValue({
        name: trip.name,
        address: trip.address,
        startDate: trip.date_start,
        endDate: trip.date_end,
        description: trip.description,
        pictures : trip.pictures
      });

      console.log(this.formModel.value.pictures);
    });


  }




  get name(){
    return this.formModel.get('name');
  }

  get address(){
    return this.formModel.get('address');
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
    return this.formModel.get('pictures') as FormArray ;
  }

  addImage(){
    console.log("dodano picture");
    this.pictures.push(new FormControl(''));
  }

  removeImage(index :number){
    console.log("usunięto picture");
    this.pictures.removeAt(index);
  }


  editTrip() {
    console.log(this.tripId);

    const images = this.formModel.value.pictures;
    console.log(images);
    let index =0;
    for(let img of images){
      console.log(img);
      if(img === ""){
        console.log("jestem "  + index);
        this.pictures.removeAt(index);
        index--;
      }
      index++;
    }

    let trip = {
      id: this.tripId,
      name: this.formModel.value.name,
      address: this.formModel.value.address,
      date_start: this.formModel.value.startDate,
      date_end: this.formModel.value.endDate,
      description: this.formModel.value.description,
      pictures: this.formModel.value.pictures
    }

    console.log("editTrip")
    console.warn(this.formModel.value);

    this.tripService.editTrip(trip).subscribe();
    this.router.navigate(['/list-of-trips']);
  }

}
