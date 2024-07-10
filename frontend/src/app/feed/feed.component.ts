import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {

  posts = [
    {
      user: {
        name: 'John Doe',
        profilePicture: 'assets/profile-picture1.jpg'
      },
      title: 'First Post',
      content: 'This is my first post!',
    },
    {
      user: {
        name: 'Jane Smith',
        profilePicture: 'assets/profile-picture2.jpg'
      },
      title: 'Another Day',
      content: 'Enjoying the sunshine today!',
    },
    {
      user: {
        name: 'Alice Johnson',
        profilePicture: 'assets/profile-picture3.jpg'
      },
      title: 'Hello World',
      content: 'Excited to join this platform!',
    }
  ];

  friends = [
    {
      name: 'Emily Davis',
      profilePicture: 'assets/friend-picture1.jpg'
    },
    {
      name: 'Michael Brown',
      profilePicture: 'assets/friend-picture2.jpg'
    },
    {
      name: 'Sarah Wilson',
      profilePicture: 'assets/friend-picture3.jpg'
    }
  ];

  newPostContent: string = '';

  @Input() userProfile: any

  constructor() {}

  ngOnInit(): void {

  }

  postNewContent() {
    if (this.newPostContent.trim()) {
      this.posts.push({
        user: {
          name: 'Current User',
          profilePicture: 'assets/profile-picture-current.jpg'
        },
        title: 'New Post',
        content: this.newPostContent,
      });
      this.newPostContent = '';
    }
  }

  sendMessage(friend: any) {
    // Logic to send a message to the friend
    console.log(`Sending message to ${friend.name}`);
  }

}


