import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hello World';
  public count: number = 10;

  increaseBy(value: number): void {
    this.count += value;
  }

  resetCounter(): void {
    this.count = 10;
  }
}
