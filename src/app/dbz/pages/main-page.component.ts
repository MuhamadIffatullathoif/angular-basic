import {Component, OnInit} from '@angular/core';
import {CharacterInterface} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  get characters(): CharacterInterface[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: CharacterInterface): void {
    this.dbzService.addCharacter(character);
  }
}
