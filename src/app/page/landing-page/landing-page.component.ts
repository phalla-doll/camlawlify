import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FilterComponent} from "./filter/filter.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  myControl: any;
  filteredOptions: any;

  constructor(
    public _MatDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public onOpenFilter(): void {
    const dialogRef = this._MatDialog.open(FilterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
