import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {

  count: number = 0;
  celsius: number = 0;
  farenheit: number = 0;

  constructor(private router: Router) { }

  

  navigate() {
    this.router.navigate(["part-b"])
  }

  convertC(input: number) {
    this.farenheit = (input * (9 / 5)) + 32;
    this.count++
  }

  convertF(input: number)
 {
   this.celsius = (input - 32) * (5/9);
   this.count++;
 }


  ngOnInit() {
  }

}
