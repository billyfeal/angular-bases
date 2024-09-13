import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
  deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop();
  }
}
