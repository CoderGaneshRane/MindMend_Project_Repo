import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { MoodTrackingComponent } from './components/mood-tracking/mood-tracking.component';
import { AiSupportComponent } from './components/ai-support/ai-support.component';
//import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'virtual', component: VirtualComponent },
  //{ path: 'register', component: RegisterComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mood-tracking', component: MoodTrackingComponent },
  { path: 'ai-support', component: AiSupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
