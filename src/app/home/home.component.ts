import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pages: {title: string; path: string}[] = [
    {
      title: "Single slot content projection",
      path: "/single-slot-projection"
    }
  ];
}
