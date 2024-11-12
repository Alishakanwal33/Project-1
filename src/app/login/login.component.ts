import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common'; // Import NgIf from CommonModule
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [NgIf,FormsModule],
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
  ){

  }
 
  onSubmit() {
    debugger;
    console.log(123);
    this.user.userName = this.email;
    this.user.password = this.password;
    
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
    // if (this.email === 'admin@example.com' && this.password === '123') {

    //   this.router.navigate(['/home']);
    //   alert('Login successful!');
    // } else {
    //   this.errorMessage = 'Invalid email or password';
    // }
  }
}
