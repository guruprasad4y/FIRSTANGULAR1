import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIRSTANGULAR';

  Name="angular";


  customerid='23456';
  controlvalu="radio";
  getalret()
  {
    window.alert("Sucessfull");
  }
  showlog()
  {
    console.log("changed refected");
  }
}
