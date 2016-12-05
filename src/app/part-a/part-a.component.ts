import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(["part-b"])
  }

  onConvert($scope) {
    $scope.edited = null;
    $scope.markEdited = function(which) {
      $scope.edited = which;
    }

    $scope.$watch('farenheit', function(value) {
      if ($scope.edited == 'F') {
        console.log(value+'C -> F');
        $scope.celsius = (value - 32) * (5.0/9.0);
      }
    });

    $scope.$watch('celsius', function(value) {
      if ($scope.edited == 'C') {
        console.log(value+'F -> C');
        $scope.farenheit = (value * (9.0/5.0)) + 32;
      }
    });
  }

  ngOnInit() {
  }

}
