import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/User';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class RegistrationComponent {
  user: User = new User();
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    // Process form submission

    this.authService.register(this.user).subscribe(
      (response) => {
        debugger;
        this.router.navigate(['/login']);
        console.log(response); // Process the response as needed
      },
      (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
        console.error(error);
      }
    );
    console.log('Form submitted:', this.user);
  }
}
