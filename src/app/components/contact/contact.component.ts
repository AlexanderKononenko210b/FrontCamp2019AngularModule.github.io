import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  name: string = "";
  surname: string = "";
  skills: string[] = [];

  ngOnInit() {
    this.name = "Aliaksandr";
    this.surname = "Kananenka";
    this.skills = ['T-SQL', 'C#', 'JS'];
  }
}
