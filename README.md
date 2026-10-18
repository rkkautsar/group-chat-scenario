# Group Chat

A small, local-first group chat used by PR Flood's milestone-driven game. The app has two channels and sample messages; it runs on Node.js without external services.

## Run it

```sh
npm install
npm start
```

Open http://127.0.0.1:4173. Break the requested feature into issues under Game Master issue #1 and work them with your local coding agent. When your changes are ready, comment `/game done` there to ask PR Flood to grade the milestone and post your debrief.

## Play

The game creates a Game Master issue and one GitHub milestone. Break the requested feature into direct sub-issues under the Game Master issue, then ask Louibot to implement each issue. Pull requests target the repository's default branch. Each accepted milestone remains in the Actions test matrix for later stages, so new work must preserve earlier behavior.
