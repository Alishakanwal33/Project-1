import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log('Login attempt:', this.email, this.password);
    this.user.userName = this.email;
    this.user.password = this.password;
/*
    if (this.email === "superadmin" && this.password === "abc123") {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
*/
    // Uncomment and use this section to integrate with the AuthService when needed
   debugger
    this.authService.login(this.user).subscribe(
      (response) => {
        this.router.navigate(['/home']);
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
  }
  register(){
    this.router.navigate(['/registration'])
  }
  forgotPassword(): void {
    // You can navigate to a password reset page or show a modal
    console.log('Navigating to Forgot Password page');
    this.router.navigate(['/forgot-password']);
    // Or if you want to show a modal or a custom message
    // alert("Please contact support for password recovery.");
  }
}
