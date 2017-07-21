import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  periods: string[] = ["Weekly", "Monthly", "Biweeekly"];
  name: string;
  cemail: string;
  period: number;

  constructor() { }

  ngOnInit() {
  }

}
