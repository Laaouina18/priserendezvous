# Guide de Présentation de l'Application de Gestion de Rendez-vous

Bienvenue dans notre application "priserendezvous" de gestion de rendez-vous ! Cette application a été développée pour permettre aux utilisateurs de saisir, afficher, supprimer des rendez-vous et de rechercher des rendez-vous en temps réel.

## Fonctionnalités

### Tâche 1: Composant de Formulaire de Rendez-vous ("AddAppointment")

Lorsque vous accédez à l'application , vous pouvez ajouter un nouveau rendez-vous en utilisant le formulaire de rendez-vous. Ce formulaire est extensible et peut être rétracté en cliquant sur un bouton, offrant ainsi une expérience utilisateur fluide.

### Tâche 2: Composant d'Informations de Rendez-vous ("AppointmentInfo")

Le composant d'informations de rendez-vous affiche en détail les rendez-vous existants. Vous pouvez également supprimer un rendez-vous en cliquant sur un bouton dédié, offrant ainsi un moyen simple et rapide de gérer vos rendez-vous.

### Tâche 3: Composant de Recherche et de Tri ("Search")

Notre application vous permet de rechercher des rendez-vous en temps réel en saisissant des termes de recherche. Vous pouvez également trier les résultats en fonction de différents critères tels que la date, l'heure, ou le nom du patient, ce qui facilite la gestion de vos rendez-vous.

### Tâche 4: Récupération de Données depuis un Fichier JSON

Nous utilisons une fonction spéciale pour récupérer les données de rendez-vous à partir d'un fichier JSON contenant des données fictives. Cette fonction utilise `useCallback` pour optimiser les performances et garantir une intégration fluide des données dans nos composants React.

## Comment Utiliser l'Application

1. **Clonez le Répertoire :** Clonez ce répertoire sur votre machine locale en utilisant la commande `git clone`.

    ```
    git clone https://github.com/Laaouina18/priserendezvous.git
    ```

2. **Installez les Dépendances :** Assurez-vous d'avoir Node.js installé sur votre machine. Exécutez `npm install` pour installer toutes les dépendances nécessaires.

    ```
    npm install
    ```

3. **Démarrage de l'Application :** Une fois les dépendances installées, lancez l'application en utilisant la commande suivante :

    ```
    npm start
    ```

    L'application sera accessible à l'adresse `http://localhost:3000` dans votre navigateur.

