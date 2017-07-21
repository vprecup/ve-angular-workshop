import { Component, OnInit, Input } from '@angular/core';
import { IRecipeInstruction } from '../model/i-recipe';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  @Input() instructions: IRecipeInstruction[];
  constructor() { }

  ngOnInit() {
  }

}
