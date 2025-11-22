# Legacy AI

Une landing page moderne pour un service de création de documentaires alimenté par l'IA qui transforme vos photos, vidéos et souvenirs personnels en documentaires cinématographiques.

![Legacy AI](https://img.shields.io/badge/version-1.0.0-orange)
![Vite](https://img.shields.io/badge/vite-7.2.4-646cff)
![License](https://img.shields.io/badge/license-ISC-blue)

## 🎯 Vue d'ensemble

Legacy AI permet de créer des documentaires professionnels à partir de vos souvenirs personnels. Notre technologie IA analyse vos photos et vidéos pour créer des récits cohérents et émouvants.

## ✨ Fonctionnalités

- 🎬 **Création automatique** - L'IA analyse et assemble vos médias
- 🎨 **Personnalisation complète** - Contrôle total sur le style et le ton
- 📱 **Design responsive** - Fonctionne sur tous les appareils
- ⚡ **Performance optimisée** - Build ultra-rapide avec Vite
- 🎭 **Animations fluides** - Expérience utilisateur immersive

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo-url>

# Aller dans le dossier du projet
cd vibe\ coding/claude/test\ 22-11

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/` (le port s'incrémente automatiquement si occupé).

### Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

Le build optimisé sera généré dans le dossier `dist/`.

## 🏗️ Architecture

### Stack technique

- **Build Tool**: Vite v7.2.4
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Module Type**: CommonJS
- **Aucun framework** - Performance maximale

### Structure des fichiers

```
.
├── claude/
│   └── test 22-11/
│       ├── index.html      # Page principale
│       ├── about.html      # Page à propos
│       ├── styles.css      # Styles globaux
│       ├── script.js       # Logique interactive
│       ├── package.json    # Dépendances
│       └── CLAUDE.md       # Guide de développement
├── .claude/                # Configuration Claude Code
├── .gitignore
└── README.md
```

### Sections de la page

1. **Navigation** - Header sticky avec liens de navigation
2. **Hero** - Proposition de valeur principale avec CTA et statistiques
3. **Features** - Grille de 6 cartes présentant les fonctionnalités
4. **How It Works** - Processus en 4 étapes
5. **Examples** - Exemples de documentaires
6. **Testimonials** - Témoignages clients
7. **Pricing** - 3 formules tarifaires (Essential, Premium, Legacy)
8. **Final CTA** - Appel à l'action de conversion
9. **Footer** - Liens et copyright

## 🎨 Design System

### Palette de couleurs

**IMPORTANT**: La couleur principale de la marque est **ORANGE** (#ff6b35).

```css
--primary-color: #ff6b35      /* Orange - Couleur principale */
--primary-dark: #e85a2c       /* Orange foncé - Hover states */
--secondary-color: #1f2937    /* Gris foncé - Accents */
--bg-white: #ffffff           /* Blanc - Background principal */
--bg-light: #f9fafb          /* Gris clair - Sections */
--text-dark: #1f2937         /* Texte principal */
--text-light: #6b7280        /* Texte secondaire */
--border-color: #e5e7eb      /* Bordures */
```

### Typographie

Police système pour une performance optimale :
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Responsive Design

- **Mobile-first** avec breakpoints à 768px et 480px
- Grilles qui s'adaptent automatiquement
- Menu hamburger sur mobile
- Typographie adaptative

## 🔧 JavaScript

### Fonctionnalités principales

1. **Smooth Scrolling** - Navigation fluide entre sections
2. **Scroll Effects** - Ombre de navbar dynamique
3. **Intersection Observer** - Animations au scroll
4. **Counter Animations** - Stats animées dans le hero
5. **Ripple Effects** - Feedback visuel sur les boutons
6. **Mobile Menu** - Menu responsive (< 768px)

### Pattern d'animation

- Éléments commencent avec `opacity: 0` et `translateY(30px)`
- IntersectionObserver déclenche le fade-in à l'entrée du viewport
- Transitions CSS pour des animations fluides

## 📝 Guide de développement

Pour des instructions détaillées sur le développement, consultez [CLAUDE.md](claude/test%2022-11/CLAUDE.md).

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence ISC.

## 👤 Auteur

**Jules Granier**

## 🙏 Remerciements

- Vite pour l'excellent build tool
- Claude Code pour l'assistance au développement
- Tous les contributeurs qui participent à ce projet

---

**Note**: Ce projet est en développement actif. Les fonctionnalités de formulaires et de lecture vidéo sont actuellement des placeholders qui seront implémentés prochainement.
