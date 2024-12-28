import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule],
})
export class ForgotPasswordComponent {
  email: string = '';
  errorMessage: string = '';
  showForgotPassword: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  // Open the modal
  openModal() {
    this.showForgotPassword = true;
  }

  // Close the modal
  closeModal() {
    this.showForgotPassword = false;
  }

  // Handle form submission
  onSubmit() {
    if (!this.email) {
      this.errorMessage = 'Please enter your email.';
      return;
    }

    this.authService.forgotPassword(this.email).subscribe(
      (response) => {
        // Close the modal and navigate to the login page on success
        this.closeModal();
        this.router.navigate(['/login']);
      },
      (error) => {
        // Display an error message if the request fails
        this.errorMessage = 'An error occurred. Please try again later.';
        console.error(error);
      }
    );
  }
}