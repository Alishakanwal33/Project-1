import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common'; // Import NgIf from CommonModule
import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, RouterLink, RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';  // Check if the current URL is the login page
  }
}
