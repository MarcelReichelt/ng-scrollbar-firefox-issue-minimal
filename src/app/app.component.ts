import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

  title = 'ng-scrollbar-firefox-issue-minimal';
}
