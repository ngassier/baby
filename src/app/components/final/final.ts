import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-final',
  imports: [CommonModule],
  templateUrl: './final.html',
  styleUrl: './final.css'
})
export class FinalComponent implements OnInit {
  showFirstMessage = false;
  showSecondMessage = false;
  showButtons = false;
  showSadReaction = false;
  
  // Nom de la fille à personnaliser
  babyName = "notre futur bébé"; // À changer selon vos besoins

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startRevealSequence();
  }

  startRevealSequence(): void {
    // Premier message après 1 seconde
    setTimeout(() => {
      this.showFirstMessage = true;
    }, 1000);

    // Deuxième message après 4 secondes
    setTimeout(() => {
      this.showSecondMessage = true;
    }, 4500);

    // Boutons après 8 secondes
    setTimeout(() => {
      this.showButtons = true;
    }, 8000);
  }

  acceptProposal(): void {
    this.showButtons = false;
    this.showSadReaction = false;
    
    // Explosion de confettis !
    this.triggerConfetti();
    
    // Message de félicitations après les confettis
    setTimeout(() => {
      this.showCelebration();
    }, 1000);
  }

  needToThink(): void {
    this.showSadReaction = true;
    this.showButtons = false;
    
    // Remettre les boutons après 3 secondes avec un message différent
    setTimeout(() => {
      this.showSadReaction = false;
      this.showButtons = true;
    }, 3000);
  }

  triggerConfetti(): void {
    // Séquence de confettis en plusieurs vagues
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ['#FFB6C1', '#87CEEB', '#DDA0DD', '#FFFACD', '#98FB98'];

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Gros confetti au centre après 1 seconde
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
        colors: colors
      });
    }, 1000);
  }

  showCelebration(): void {
    // Ici on pourrait rediriger vers une page de célébration
    // ou simplement afficher un message de remerciement
  }

  restartQuiz(): void {
    this.router.navigate(['/']);
  }
}
