import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetHero(): void {
    this.name = 'Ironman';
    this.age = 40;
  }
}
