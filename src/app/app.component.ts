import { Component } from '@angular/core';

interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Peter';
  seconds = 0;
  mouseX = 0;
  mouseY = 0;
  numbers: number[] = [];
  points: Point[] = [];

  constructor() {
    setInterval(() => this.numbers.push(++this.seconds), 1000);
  }

  reset(): void {
    this.seconds = 0;
    this.numbers = [];
  }

  updateMousePosition(event: MouseEvent): void {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
  }

  addPoint(): void {
    this.points.push({
      x: this.mouseX,
      y: this.mouseY
    });
  }
}
