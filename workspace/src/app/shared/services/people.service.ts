import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'João',
        lastName: 'Kadota',
        age: 33
      },
      {
        firstName: "André",
        lastName: "Felicio",
        age: 22
      },
      {
        firstName: "Natália",
        lastName: "Inácio",
        age: 34
      },
      {
        firstName: "Tony",
        lastName: "Kadota",
        age: 50
      }
    ]

    return of(peopleArray)
  }
}

