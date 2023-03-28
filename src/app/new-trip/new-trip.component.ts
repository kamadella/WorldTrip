import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Trip } from 'src/trip';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  formModel!: FormGroup;

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit(): void {
    this.formModel = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      pictures: new FormArray([
        new FormControl(''),
      ]),
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
    return this.formModel.get('pictures') as FormArray ;
  }

  addImage(){
    this.pictures.push(new FormControl(''));
  }

  removeImage(index :number){
    this.pictures.removeAt(index);
  }


  addTrip() {
    console.log(this.formModel.value.pictures);

    console.warn(this.formModel.value);

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

    let trip = new Trip(0, this.formModel.value.name,this.formModel.value.startDate,this.formModel.value.endDate,this.formModel.value.description, this.formModel.value.pictures);

    if(confirm("Are you sure to add? ")){
        this.tripService.addTrip(trip).subscribe();
        this.router.navigate(['/list-of-trips']);
      }

    }


}
