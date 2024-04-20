import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgScrollbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

  title = 'ng-scrollbar-firefox-issue-minimal';
}
