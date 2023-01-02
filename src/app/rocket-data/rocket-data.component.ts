import { Component, OnInit } from '@angular/core';
import { RocketDataDialogComponent } from '../rocket-data-dialog/rocket-data-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-rocket-data',
  templateUrl: './rocket-data.component.html',
  styleUrls: ['./rocket-data.component.scss']
})
export class RocketDataComponent implements OnInit {
  showContent = false;
  public rocketsAsJson: any;

  constructor(public dialog: MatDialog) {
    this.loadRockets()
  }

  ngOnInit(): void {
  }

  async loadRockets() {
    let url = `https://api.spacexdata.com/v4/rockets`;
    let response = await fetch(url);
    this.rocketsAsJson = await response.json();
    this.showContent = true;
    console.log(this.rocketsAsJson)

  }
  openDialog() {
    const dialogRef = this.dialog.open(RocketDataDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
