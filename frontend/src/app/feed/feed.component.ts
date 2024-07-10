import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  @Input() userProfile: any

  constructor() {}

  ngOnInit(): void {
      
  }
}
