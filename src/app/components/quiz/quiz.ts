import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Quiz as QuizService, Question } from '../../services/quiz';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class QuizComponent implements OnInit {
  currentQuestionIndex = 0;
  currentQuestion: Question | null = null;
  questions: Question[] = [];
  isAnswering = false;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questions = this.quizService.getAllQuestions();
    this.loadCurrentQuestion();
  }

  loadCurrentQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.router.navigate(['/final']);
    }
  }

  selectOption(option: string): void {
    if (this.isAnswering || !this.currentQuestion) return;
    
    this.isAnswering = true;
    this.quizService.addAnswer(this.currentQuestion.id, option);
    
    // Petite animation avant de passer à la question suivante
    setTimeout(() => {
      this.currentQuestionIndex++;
      this.isAnswering = false;
      this.loadCurrentQuestion();
    }, 800);
  }

  get progressPercentage(): number {
    return (this.currentQuestionIndex / this.questions.length) * 100;
  }

  get questionNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  get totalQuestions(): number {
    return this.questions.length;
  }
}
