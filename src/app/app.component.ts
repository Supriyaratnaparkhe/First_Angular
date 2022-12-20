import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  name="";
  constructor(private user:UsersService)
     {
      console.warn(this.user.getData())
      let data=this.user.getData();
      
      this.name=data.name
     }
}
