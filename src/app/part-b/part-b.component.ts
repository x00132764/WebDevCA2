import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
