import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  choice: boolean = true;

  constructor(){}

  sectionChoosed(trfChoice: boolean){
    console.log(trfChoice)
    this.choice = trfChoice;
  }

}
