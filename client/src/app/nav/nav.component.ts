import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav', //use this to add this to another  component
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.model);
  }
}
