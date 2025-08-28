# 🌟 Aventure Magique - Demande de Parrain/Marraine 🌟

Une application Angular interactive et ludique pour faire une demande de parrain/marraine de façon originale et mémorable !

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- **Design magique** avec dégradés colorés et animations
- **Introduction engageante** qui prépare l'utilisateur à une surprise
- **Bouton d'action** pour commencer l'aventure

### 🎯 Quiz Interactif
- **4 questions amusantes** et génériques qui ne révèlent rien avant la fin
- **Interface moderne** avec cartes cliquables et animations fluides
- **Barre de progression** visuelle pour suivre l'avancement
- **Transitions animées** entre chaque question

**Exemples de questions :**
- "Si tu avais un super-pouvoir, lequel choisirais-tu ?"
- "Quel héros te ressemble le plus ?"
- "Tu préfères : Lire une histoire / Jouer dehors / Préparer des crêpes / Faire des câlins"
- "Complète cette phrase : 'L'aventure la plus incroyable, c'est…'"

### 🎭 Révélation Finale
- **Effet machine à écrire** pour créer du suspense
- **Révélation progressive** en deux étapes
- **Question finale** personnalisée avec le prénom de l'enfant
- **Deux boutons de réponse** :
  - ✅ **"J'accepte avec honneur !"** → Explosion de confettis avec canvas-confetti
  - ❌ **"Je dois réfléchir..."** → Animation rigolote avec réaction triste

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation
```bash
# Se rendre dans le répertoire
cd baby

# Installer les dépendances
npm install

# Lancer en développement
npm start
```

L'application sera disponible sur http://localhost:4200/

### Build de Production
```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## ⚙️ Personnalisation

### Changer le Prénom de l'Enfant
Dans `src/app/components/final/final.ts`, modifiez la variable :
```typescript
babyName = "Emma"; // Remplacez par le prénom souhaité
```

### Modifier les Questions
Dans `src/app/services/quiz.ts`, modifiez le tableau `questions`

## 🎪 Utilisation

1. **Partagez le lien** de l'application avec la personne choisie
2. **Elle répond aux questions** sans savoir ce qui l'attend
3. **La surprise se révèle** progressivement à la fin
4. **Célébration** si elle accepte, ou réaction mignonne si elle hésite

---

Créé avec ❤️ pour des moments magiques en famille ! ✨👶✨
