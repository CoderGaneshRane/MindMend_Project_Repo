import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  features = [
    { icon: 'assets/img/virtual.png', title: 'Virtual Therapy', description: 'Book private sessions with licensed therapists from the comfort of your home.' },
    { icon: 'assets/img/mood.png', title: 'Mood Tracking', description: 'Track your emotional journey and visualize your progress over time.' },
    { icon: 'assets/img/AI.png', title: 'AI Support', description: '24/7 AI-driven emotional support and coping strategies.' }
];

reasons = [
    { icon: 'assets/img/image.png', title: 'Professional Care', description: 'Licensed and vetted mental health professionals.' },
    { icon: 'assets/img/image.png', title: 'Privacy First', description: 'Secure, confidential, and HIPAA-compliant platform.' },
    { icon: 'assets/img/image.png', title: 'Flexible Support', description: 'Multiple support options to suit your needs.' },
    { icon: 'assets/img/image.png', title: 'Progress Tracking', description: 'Visualize your journey to better mental health.' }
];

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
