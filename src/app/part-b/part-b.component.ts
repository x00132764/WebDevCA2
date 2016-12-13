import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent implements OnInit {

  kilograms: number = 0;
  stone: number = 0;
  pounds: number = 0;
  feet: number = 0;
  metres: number = 0;
  inches: number = 0;
  bmi: number = 0;
  range: string = "";

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(["part-b"])
  }

  convertFromKG(input: number) {
    this.kilograms = input;
    this.stone = this.kilograms * (5 / 32);
    this.pounds = this.kilograms * (141 / 64);
  }

  convertFromStone(input: number) {
    this.stone = input;
    this.kilograms = this.stone / (5 / 32);
    this.pounds = this.stone * 14;
  }

  convertFromPounds(input: number) {
    this.pounds = input;
    this.kilograms = this.pounds / (141 / 64);
    this.stone = this.pounds / 14;
  }

  convertFromMetres(input: number) {
    this.metres = input;
    this.inches = this.metres * (315 / 8);
    this.feet = this.inches / 12; 
  }

  convertFromInches(input: number) {
    this.inches = input;
    this.metres = this.inches / (315 / 8);
    this.feet = this.inches / 12;
  }

  convertFromFeet(input: number) {
    this.feet = input;
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
