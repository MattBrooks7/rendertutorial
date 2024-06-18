import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SignupComponent,
    ReactiveFormsModule],
})
export class AppComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  title = 'frontend';
}
