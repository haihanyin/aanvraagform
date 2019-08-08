import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuName: string;
  @Input() isSelected: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectMenu() {
    this.router.navigate([this.menuName])
  }

}
