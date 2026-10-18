---
title: Make @mentions hard to miss
mode: milestone
pool: group-chat
requiredCheck: Chat E2E / mentions
workflowPath: .github/workflows/chat-e2e.yml
protectedFiles:
  - .github/workflows/chat-e2e.yml
  - scripts/active-cards.sh
  - test/e2e/threads.spec.js
  - test/e2e/mentions.spec.js
  - test/e2e/search.spec.js
  - test/e2e/muting.spec.js
evaluation:
  issueBreakdown: Reward independent, reviewable slices for parsing mentions, creating recipient-specific notifications, and linking a notification back to the right channel message. One broad issue for the full feature earns low breakdown credit; issue count itself is not a gate.
  issueClarity: Reward issues with concrete rules for matching names, duplicate mentions, notification ownership, and acceptance criteria that let an agent work with few clarification rounds.
  pullRequestQuality: Judge correctness for multiple recipients and repeated mentions, privacy of notification data, accessibility, tests, and fit with the existing app.
  reviewQuality: Reward accurate, actionable feedback about mention parsing, privacy, duplicate delivery, or regressions. Give little credit for cosmetic-only nitpicks.
endings:
  success: Teammates can bring the right person into the conversation.
  incomplete: Mentions still disappear into the message stream.
  partial: The milestone could not be fully assessed.
---
People miss requests directed at them because messages arrive while they are away. Add @mentions that recognize a teammate in a new message, create a notification for the intended person, and let that person open the source message. A notification belongs to its recipient; another teammate must not see it as their own. Avoid duplicate notifications when the same person is mentioned twice in one message.
