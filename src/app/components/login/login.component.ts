import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private service: LoginService, private route: Router) { }
  isLogin: boolean = true;

  toggleLogin() {
    this.isLogin = true;
  }

  toggleRegister() {
    this.isLogin = false;
  }
  validateLoginForm(): void {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(this.password)) {
      alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      this.onLogin();
    }
  }

  validateRegisterForm(): void {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(this.password)) {
      alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      this.onRegister();
    }
  }

  onLogin() {
    this.service.login(this.email, this.password).subscribe({
      next: (response) => {
        const user = response.find((u: any) => u.email === this.email && u.password === this.password);
        if (user != null) {
          localStorage.setItem('userEmail', this.email);
          alert("Logged in Successfully!!")
          this.route.navigate(['/virtual'])
        }
        else {
          alert("Invalid Credentials!!")
        }
      },
      error: () => {
        alert("Error logging in. Please try again.")
      },
    });
  }
  onRegister() {
    this.service.register(this.email, this.password).subscribe({
      next: (response) => {
        if (response.error) {
          alert(response.error);
        } else {
          alert("User added successfully!");
        }
      },
      error: (err) => {
        alert('Error registering user. Please try again.')
      },
    });
  }
}
