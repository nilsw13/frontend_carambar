Application Web Carambar - Frontend
Ce projet représente la partie frontend de l'application web Carambar, développée avec React et Vite pour offrir une expérience utilisateur moderne et performante.

🚀 Technologies Utilisées

React - Bibliothèque JavaScript pour la construction d'interfaces utilisateur
Vite - Outil de build nouvelle génération pour le développement web
TailwindCSS - Framework CSS 
Axios : Client HTTP pour les communications avec l'API backend

📋 Prérequis
Avant de commencer, assurez-vous d'avoir installé :

Node.js (version 16.0.0 ou supérieure)
npm (version 7.0.0 ou supérieure)
Git

🛠️ Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-username/frontend_carambar.git
cd frontend_carambar
```

2. Installez les dépendances :

``` bash
    npm install
```

3. Configurez les variables d'environnement :


Créez un fichier .env à la racine du projet
Ajoutez les variables nécessaires :

```env
    VITE_API_URL=http://localhost:3000
```

4. Lancez l'application en mode développement :

```bash
    npm run dev
```

📂 Structure du Projet

frontend_carambar/
├── node_modules/
├── public/
│   └── assets/
│       ├── images/
│       └── fonts/
├── src/
│   ├── components/
│   │   └── outlet-view/
│   │       └── utils/
│   ├── hooks/
│   ├── pages/
│   ├── schemas/
│   ├── services/
│   │   └── api/
│   └── styles/

🤝 Contribution
Les contributions sont les bienvenues ! Pour contribuer :

Forkez le projet
Créez une branche pour votre fonctionnalité (git checkout -b feature/AmazingFeature)
Committez vos changements (git commit -m 'Add some AmazingFeature')
Poussez vers la branche (git push origin feature/AmazingFeature)
Ouvrez une Pull Request