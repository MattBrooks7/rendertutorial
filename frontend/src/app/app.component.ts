import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        SignupComponent,
        ReactiveFormsModule,
        HeaderComponent,
        HttpClientModule,
    ]
})
export class AppComponent {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  title = 'frontend';
}
