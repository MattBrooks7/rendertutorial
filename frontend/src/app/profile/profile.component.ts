import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProfileComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  newPostContent: string = '';

  userProfile = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    posts: [
      { title: 'Post 1', content: 'This is the content of post 1.' },
      { title: 'Post 2', content: 'This is the content of post 2.' },
      // Add more posts as needed
    ]
  };

  postNewContent() {
    if (this.newPostContent.trim() !== '') {
      this.userProfile.posts.unshift({
        title: 'New Post',
        content: this.newPostContent.trim()
      });
      this.newPostContent = '';  // Clear input after posting
    }
    }

  constructor() {}

  ngOnInit(): void {

  }

}
