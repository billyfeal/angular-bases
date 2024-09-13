import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponet {
  counter: number = 1;

  increaseBy(value: number = 1): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 1;
  }
}
