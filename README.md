# Group Chat

A small, local-first group chat used by PR Flood's milestone-driven game. The app has two channels and sample messages; it runs on Node.js without external services.

## Run it

```sh
npm install
npm start
```

Open http://127.0.0.1:4173. The `test/e2e` folder contains the protected browser tests used by the game. Each milestone card adds one test to the set run after merges. The workflow reads the selected cards from the PR Flood milestone titles, so unused cards do not show up as failing checks.

## Play

The game creates a Game Master issue and one GitHub milestone. Break the requested feature into direct sub-issues under the Game Master issue, then ask Louibot to implement each issue. Pull requests target the repository's default branch. Each accepted milestone remains in the Actions test matrix for later stages, so new work must preserve earlier behavior.
