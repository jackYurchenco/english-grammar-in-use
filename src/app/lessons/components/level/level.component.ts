import { Component } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {
  public level: string;

  constructor() {
    this.level = `beginner`;
  }

  public selectLevel(level: string): void {
    this.level = level;
  }
}
