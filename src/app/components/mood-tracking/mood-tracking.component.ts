import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-mood-tracking',
  templateUrl: './mood-tracking.component.html',
  styleUrls: ['./mood-tracking.component.css']
})
export class MoodTrackingComponent implements OnInit {
  moodNote: string = ''; 

  constructor(private route: Router) { }

  signOut() {
    this.route.navigate(['home'])
  }
  ngOnInit(): void {
    this.initializeChart();
  }

  /**
   * Logs the selected mood to the console.
   * @param mood The selected mood as a string.
   */
  logMood(mood: string): void {
    console.log(`Mood logged: ${mood}`);
  }

  saveMood(): void {
    console.log('Mood note saved:', this.moodNote);
    this.moodNote = ''; 
  }

  private initializeChart(): void {
    const ctx = (document.getElementById('mood-chart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Mood Level',
              data: [6, 7, 8, 5, 9, 10, 7],
              borderColor: '#6f42c1',
              backgroundColor: 'rgba(111, 66, 193, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 10
            }
          }
        }
      });
    }
  }
}
