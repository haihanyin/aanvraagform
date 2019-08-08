import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.css']
})
export class MenuGroupComponent implements OnInit {

  @Input() groupName: string;
  menuNames: Array<string> = ['Inleiding', 'Persoonlijk', 'Relaties', 'Adres', 
    'Huisarts', 'Verzekeraar', 'Zorgvraag', 'Toestemming', 'Indienen'];

  @Input() selectedMenu: string;

  constructor() { }

  ngOnInit() {
  }

  isThisMenuSelected(menuName: string): boolean {
    if (this.selectedMenu == null) {
      return menuName === "Inleiding";
    }
    return menuName === this.selectedMenu;
  }
}
