import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-relaties',
  templateUrl: './relaties.component.html',
  styleUrls: ['./relaties.component.css']
})
export class RelatiesComponent implements OnInit {

  partnerGroup = new FormGroup({
    heeftPartner: new FormControl(''),
    geboortedatum: new FormControl('', Validators.required),
    geboortenaam: new FormControl(''),
    voorletters: new FormControl(''),
    voorvoegsel: new FormControl(''),
    geslacht: new FormControl(''),
    telefoonnummer: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.partnerGroup.value);
    console.log(this.partnerGroup.status);
  }
}
