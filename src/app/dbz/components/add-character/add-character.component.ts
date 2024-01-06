import { Component } from '@angular/core';
import {CharacterInterface} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public character: CharacterInterface = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);
  }
}
