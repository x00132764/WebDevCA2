import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent implements OnInit {

  kilograms: number = null;
  stone: number = null;
  pounds: number = null;
  feet: number = null;
  metres: number = null;
  inches: number = null;
  bmi: number = null;
  range: string = "";

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(["part-a"])
  }

  convertFromKG() {
    this.stone = this.kilograms * (5 / 32);
    this.pounds = this.kilograms * (141 / 64);
    
  }

  convertFromStone() {
    this.kilograms = this.stone / (5 / 32);
    this.pounds = this.stone * 14;
  }

  convertFromPounds() {
    this.kilograms = this.pounds / (141 / 64);
    this.stone = this.pounds / 14;
  }

  convertFromMetres() {
    this.inches = this.metres * (315 / 8);
    this.feet = this.inches / 12; 
  }

  convertFromInches() {
    this.metres = this.inches / (315 / 8);
    this.feet = this.inches / 12;
  }

  convertFromFeet() {
    this.inches = this.feet * 12;
    this.metres = this.inches / (315 / 8);
  }

  calcBMI() {
    //BMI = weight(kg)/height2(m2) 
    this.bmi = this.kilograms / ((this.metres) * (this.metres));

    if (this.bmi < 16) {
      this.range = "severe thinness range";
    }

    if (this.bmi >= 16 && this.bmi < 17) {
      this.range = "moderate thinness range";
    }

    if (this.bmi >= 17 && this.bmi < 18.5) {
      this.range = "mild thinness range";
    }

    if (this.bmi >=18.5 && this.bmi <25) {
      this.range = "normal range";
    }

    if (this.bmi >= 25 && this.bmi < 30) {
      this.range = "overweight range";
    }
    
    if (this.bmi >= 30) {
      this.range = "obese range";
    }
  }

  ngOnInit() {
  }

}
