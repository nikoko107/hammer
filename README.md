# OSINT Pseudo Generator

Outil OSINT 100 % statique permettant de générer des variantes d'un pseudo via substitution leet bidirectionnelle bornée par une distance de Hamming, puis de tester manuellement chaque variante sur une liste de sites configurable.

## Fonctionnalités

- Génération de variantes leet (a↔4, e↔3, i↔1, etc.) avec distance de Hamming 1/2/3
- Wordlist exportable et liste de liens cliquables
- Suivi d'état par lien (🔴 / 🟡 / 🟢) persisté dans le navigateur
- Éditeur de sites configurable
- Import / Export de session JSON
- 100 % statique — fonctionne offline après premier chargement

## Déploiement sur GitHub Pages

1. Forkez ou clonez ce dépôt
2. Activez GitHub Pages depuis **Settings → Pages → Source: main branch / root**
3. L'application est accessible à `https://<votre-compte>.github.io/<nom-du-repo>/`

Aucune étape de build requise.

## Utilisation locale

Servez simplement les fichiers avec n'importe quel serveur HTTP statique :

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

Puis ouvrez `http://localhost:8000`.

> **Note** : l'application ne peut pas être ouverte via `file://` en raison des `fetch()` vers les fichiers de config JSON. Un serveur HTTP local est nécessaire.

## Licence

MIT
