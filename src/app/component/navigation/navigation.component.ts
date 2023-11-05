import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../share/service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {LoginPageComponent} from "../../page/login-page/login-page.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public scrollOffset: number = 0;
  user: any;
  constructor(
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  /** For scroll event */
  @HostListener('window:scroll', []) onWindowScroll(): void {
    this.scrollOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  ngOnInit(): void {
    if (localStorage.getItem('USER_DATA')) {
      this.user = JSON.parse(localStorage.getItem('USER_DATA') ?? '');
      console.log(this.user);
    }
  }

  onLogIn(): void {
    this.matDialog.open(LoginPageComponent, {autoFocus: false, disableClose: true});
  }

  onLogOut() {
    this.authService.onLogOutUser().subscribe((response) => {
      localStorage.removeItem('USER_DATA');
    }, error => {
      localStorage.removeItem('USER_DATA');
      this.user = {};
      this.matSnackBar.open(error.error.message ?? 'Unable to logout!', 'Contact Us')
    });
  }
}
