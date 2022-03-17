import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() onChooseSection = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  choice(bool: boolean){
    this.onChooseSection.emit(bool);
  }

}
