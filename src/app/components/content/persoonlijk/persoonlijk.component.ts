import { Component, OnInit } from '@angular/core';
import { BasicFieldConfig } from 'src/app/models/BasicFieldConfig';
import { PersoonlijkFields } from 'src/app/models/PersoonlijkFields';
import { PersoonlijkCommand } from 'src/app/models/PersoonlijkCommand';

@Component({
  selector: 'app-persoonlijk',
  templateUrl: './persoonlijk.component.html',
  styleUrls: ['./persoonlijk.component.css']
})
export class PersoonlijkComponent implements OnInit {

  private fields: Array<BasicFieldConfig> = PersoonlijkFields.fields;
  private persoonlijkCommand : PersoonlijkCommand = new PersoonlijkCommand();

  constructor() {
  
  }

  ngOnInit() {

  }

  getModelName(fieldName: string) {
    return "persoonlijkCommand." + fieldName;
  }

  getModel(fieldName: string) {
    return this.persoonlijkCommand[fieldName];
  }

  setModel(fieldName: string, event: string) {
    this.persoonlijkCommand[fieldName] = event;
  }

  submit() {
    console.log(this.persoonlijkCommand);
  }

}
