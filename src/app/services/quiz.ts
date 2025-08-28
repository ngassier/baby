import { Injectable } from '@angular/core';

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface QuizAnswer {
  questionId: number;
  selectedOption: string;
}

@Injectable({
  providedIn: 'root'
})
export class Quiz {
  private answers: QuizAnswer[] = [];
  
  readonly questions: Question[] = [
    {
      id: 1,
      text: "Si tu avais un super-pouvoir, tu choisirais lequel ?",
      options: [
        "Voler dans le ciel 🕊️",
        "Voyager dans le temps ⏳",
        "Lire dans les pensées 💭",
        "Téléporter des gâteaux 🍰"
      ]
    },
    {
      id: 2,
      text: "Quel héros te ressemble le plus ?",
      options: [
        "Batman 🦇",
        "Wonder Woman 💪",
        "Harry Potter 🧙",
        "Shrek 😂"
      ]
    },
    {
      id: 3,
      text: "Que préfères-tu faire un dimanche ?",
      options: [
        "Lire une histoire 📖",
        "Jouer dehors 🌳",
        "Préparer des crêpes 🥞",
        "Faire la sieste 😴"
      ]
    },
    {
      id: 4,
      text: "Quel animal te correspond le plus ?",
      options: [
        "Chat 🐱",
        "Chien 🐶",
        "Dauphin 🐬",
        "Panda 🐼"
      ]
    },
    {
      id: 5,
      text: "Quelle qualité trouves-tu la plus importante ?",
      options: [
        "La patience 🧘",
        "Le courage 🦁",
        "L'humour 🤡",
        "La gentillesse ❤️"
      ]
    },
    {
      id: 6,
      text: "Si tu devais choisir une couleur qui te définit ?",
      options: [
        "Bleu 💙",
        "Vert 💚",
        "Rouge ❤️",
        "Jaune 💛"
      ]
    },
    {
      id: 7,
      text: "Quel est ton super-aliment préféré ?",
      options: [
        "Chocolat 🍫",
        "Pizza 🍕",
        "Crêpes 🥞",
        "Fruits 🍎"
      ]
    },
    {
      id: 8,
      text: "Quelle musique te fait toujours sourire ?",
      options: [
        "Une berceuse douce 🎶",
        "Une chanson qui fait danser 💃",
        "Une musique épique 🎺",
        "Une chanson drôle 😂"
      ]
    },
    {
      id: 9,
      text: "Quelle activité choisirais-tu pour une après-midi idéale ?",
      options: [
        "Jouer à un jeu 🎲",
        "Aller se balader 🚶",
        "Regarder un film 🎬",
        "Cuisiner ensemble 👩‍🍳"
      ]
    },
    {
      id: 10,
      text: "Complète cette phrase : \"L'aventure la plus incroyable, c'est…\"",
      options: [
        "Aimer ❤️",
        "Protéger 🛡️",
        "Rire ensemble 😂",
        "Partager 🌟"
      ]
    }
  ];

  addAnswer(questionId: number, selectedOption: string): void {
    const existingAnswerIndex = this.answers.findIndex(a => a.questionId === questionId);
    if (existingAnswerIndex >= 0) {
      this.answers[existingAnswerIndex].selectedOption = selectedOption;
    } else {
      this.answers.push({ questionId, selectedOption });
    }
  }

  getAnswers(): QuizAnswer[] {
    return [...this.answers];
  }

  resetQuiz(): void {
    this.answers = [];
  }

  getQuestion(id: number): Question | undefined {
    return this.questions.find(q => q.id === id);
  }

  getAllQuestions(): Question[] {
    return this.questions;
  }
}
