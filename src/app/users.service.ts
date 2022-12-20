import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData()
  {
    return{
      name:'Supriya',
      age:21,
      id:100
    }
  }
}
