import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.interests = [
      {value:'reading', viewValue:'Reading'},
      {value:'swimming', viewValue:'Swimming'},
      {value:'cycling', viewValue:'Cycling'}
    ];
  }
}