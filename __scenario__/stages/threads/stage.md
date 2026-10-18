---
title: Keep the conversation together with message threads
mode: milestone
pool: group-chat
requiredCheck: Chat E2E / threads
workflowPath: .github/workflows/chat-e2e.yml
protectedFiles:
  - .github/workflows/chat-e2e.yml
  - scripts/active-cards.sh
  - playwright.config.js
  - test/e2e/threads.spec.js
  - test/e2e/mentions.spec.js
  - test/e2e/search.spec.js
  - test/e2e/muting.spec.js
evaluation:
  issueBreakdown: Reward independent, reviewable slices for opening a thread, adding replies, showing reply counts, and keeping the thread attached to its parent message. One broad issue for the full feature earns low breakdown credit; issue count itself is not a gate.
  issueClarity: Reward issues with concrete scope, edge cases, and acceptance criteria that let a local coding agent work with few clarification rounds.
  pullRequestQuality: Judge the merged code against the behavior, data model, accessibility, tests, and maintainability. Consider whether changes fit the existing app rather than replacing unrelated parts.
  reviewQuality: Reward accurate, actionable feedback about behavior, data integrity, accessibility, or regression risk. Give little credit for cosmetic-only nitpicks.
endings:
  success: The team can follow a discussion without losing its place in the channel.
  incomplete: The conversation still loses replies or context.
  partial: The milestone could not be fully assessed.
---
Teammates are replying in different places, and important context gets buried in the main channel. Add message threads so someone can open a message, read its replies in context, and respond without turning every follow-up into a new channel message. The thread should stay connected to its original message and show an accurate reply count. Keep channel conversation usable on narrow screens and make thread controls accessible by keyboard.
