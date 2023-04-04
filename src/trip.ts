export class Trip {
  id: number;
  name: string;
  address: string;
  date_start: Date;
  date_end: Date;
  description: string;
  pictures: string[];

  constructor(id:number, address: string, name:string, date_start:Date, date_end:Date, description: string, pictures: string[]){
    this.id=id;
    this.name=name;
    this.address=address;
    this.date_start=date_start;
    this.date_end=date_end;
    this.description=description;
    this.pictures=pictures;
  }
}
