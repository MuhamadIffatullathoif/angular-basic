import { Injectable } from '@angular/core';
import {CharacterInterface} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

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
    this.characters.push(character);
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }
}
