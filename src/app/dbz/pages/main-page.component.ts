import {Component, OnInit} from '@angular/core';
import {CharacterInterface} from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: CharacterInterface[] = [
    {
      name: "Krillin",
      power: 1000
    },
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Vegeta",
      power: 7500
    }
  ];

  onNewCharacter(character: CharacterInterface): void {
    console.log(character);
  }

}
