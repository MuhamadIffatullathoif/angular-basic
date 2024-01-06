import {Component, EventEmitter, Output} from '@angular/core';
import {CharacterInterface} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<CharacterInterface> = new EventEmitter();
  public character: CharacterInterface = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character.name = '';
    this.character.power = 0;
  }
}
