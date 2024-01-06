import {Injectable} from '@angular/core';
import {v4 as uuid} from 'uuid';
import {CharacterInterface} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: CharacterInterface[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
  ];

  onNewCharacter(character: CharacterInterface): void {
    const newCharacter: CharacterInterface = {id:uuid(), ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter((character: CharacterInterface) => character.id !== id);
  }
}
