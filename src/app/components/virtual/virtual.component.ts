import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualService } from 'src/app/services/virtual.service';// Import the service


@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css'] 
})
export class VirtualComponent implements OnInit{
  
  selectedDate: string = '';
  selectedTime: string = '';
  userEmail: string = '';

  constructor(private service:VirtualService, private route:Router) {}

  ngOnInit(): void {
    
    this.userEmail = localStorage.getItem('userEmail') || ''; // Default to empty string if email is not found
    if (!this.userEmail) {
      this.route.navigate(['login'])
    }}

  timeSlots: string[] = ['10:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];

  therapists = [
    {
      image: 'assets/img/therapist1.jpg',
      name: 'Dr. Sarah Johnson',
      specialization: 'Anxiety & Depression',
      availableTimes: ['10:00 AM', '2:00 PM', '4:00 PM']
    },
    {
      image: 'assets/img/therapist2.jpg',
      name: 'Dr. Michael Chen',
      specialization: 'Stress Management',
      availableTimes: ['9:00 AM', '1:00 PM', '3:00 PM']
    },
    {
      image: 'assets/img/therapist3.jpg',
      name: 'Dr. Emily Rodriguez',
      specialization: 'Relationship Counseling',
      availableTimes: ['11:00 AM', '2:30 PM', '5:00 PM']
    }
  ];

  signOut(): void {
    alert('Thank you for Visiting !! Sign Out Successfully!')
    this.route.navigate(['home'])
  }

  // Method to handle booking button click
  // bookSession(): void {
  //   if (!this.selectedDate || !this.selectedTime) {
  //     alert('Please select a date and time for your session.');
  //     return;
  //   }

  //   console.log(`Session booked on ${this.selectedDate} at ${this.selectedTime}`);
  //   alert(`Your session has been booked for ${this.selectedDate} at ${this.selectedTime}`);
  // }
  bookSession(): void {
    if (!this.selectedDate || !this.selectedTime) {
      alert('Please select both a date and a time slot.');
      return;
    }

    const bookingData = {
      date: this.selectedDate,
      time: this.selectedTime,
      email: this.userEmail 
    };

    this.service.bookSession(bookingData).subscribe(
      (response) => {
        if(response.message){
          //alert(response.message);
          alert(`Your session has been booked for ${this.selectedDate} at ${this.selectedTime}`)
          this.selectedDate = '';
          this.selectedTime = '';
        }else if(response.error){
          alert(response.error);
        }
      },
      (error) => {
        console.error('Error booking session:', error);
        alert('Failed to book the session. Please try again later.');
      }
    );
  }
}
