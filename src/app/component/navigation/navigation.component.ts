import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public scrollOffset: number = 0;

  constructor() { }

  /** For scroll event */
  @HostListener('window:scroll', []) onWindowScroll(): void {
    this.scrollOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  ngOnInit(): void {
    console.log('scrollOffset', this.scrollOffset);
  }


}
