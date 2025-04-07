// import { Component } from '@angular/core';
// import { LoginService } from 'src/app/services/login.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
// })
// export class RegisterComponent {
//   email = '';
//   password = '';
//   message = '';

//   constructor(private service: LoginService) {}

//   onRegister() {
//     this.service.register(this.email, this.password).subscribe({
//       next: (response) => {
//         if(response!=null){
//           alert('User registered successfully!')
//         }
//       },
//       error: (err) => {
//         alert('Error registering user. Please try again.')
//       },
//     });
//   }
// }
