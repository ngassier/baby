import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { QuizComponent } from './components/quiz/quiz';
import { FinalComponent } from './components/final/final';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quiz', component: QuizComponent },
  { path: 'final', component: FinalComponent },
  { path: '**', redirectTo: '' }
];
