import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {

  count: number = 0;
  celsius: number = null;
  farenheit: number = null;

  constructor(private router: Router) { }

  

  navigate(selection: string) {
    if (selection == "partb") {
      this.router.navigate(['page2']);
    }
    if (selection == "") {
      this.router.navigate(['homepage']);
    }

    if (selection == "parta") {
      this.router.navigate(['page1']);
    }
  }

  convertC() {
    this.farenheit = (this.celsius * (9 / 5)) + 32;
    this.count++
  }

  convertF()
 {
   this.celsius = (this.farenheit - 32) * (5/9);
   this.count++;
 }


  ngOnInit() {
  }

}
