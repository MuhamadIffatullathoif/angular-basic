import {Component, Input} from '@angular/core';
import {CharacterInterface} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: CharacterInterface[] = [
    {
      name: "Trunks",
      power:1000
    }
  ];

}
