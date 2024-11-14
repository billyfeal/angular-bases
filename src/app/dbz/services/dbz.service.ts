import { v4 as uuid } from 'uuid';

import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Kriling',
      power: 100,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    },
  ];

  addCharacter(character: Character): void {
    this.characters.push(character);
    console.log(this.characters);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
