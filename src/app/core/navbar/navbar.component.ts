import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  openSnackBar() {
    const msg = 'Page currently unavaible. Kindly check in later';
    const act = 'OK!';
    this.snackBar.open(msg, act, {
      duration: 5000,
    });
  }

}
