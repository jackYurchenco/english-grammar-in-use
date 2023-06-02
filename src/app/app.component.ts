import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'english-grammar-in-use';


  public log(data: string): void {
    console.log(data)
  }
}
