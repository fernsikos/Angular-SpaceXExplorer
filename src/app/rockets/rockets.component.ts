import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
  fadeout = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  openRockets() {
    this.fadeout = true
    setTimeout(() => {
      this.router.navigate(['rocket-data'])

    }, 500);
  }
}
