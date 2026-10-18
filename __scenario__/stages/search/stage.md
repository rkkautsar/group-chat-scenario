---
title: Find the message everyone remembers
mode: milestone
pool: group-chat
requiredCheck: Chat E2E / search
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
  issueBreakdown: Reward coherent slices for query handling, matching messages across channels, rendering useful results, and opening a selected result in context. One broad issue for the full feature earns low breakdown credit; issue count itself is not a gate.
  issueClarity: Reward clear matching rules, empty-state behavior, and acceptance criteria that let an agent implement without repeated clarification.
  pullRequestQuality: Judge relevant and safe matching, useful result context, keyboard access, loading and empty states, tests, and maintainability.
  reviewQuality: Reward actionable feedback about relevance, escaping, performance, or navigation behavior. Give little credit for cosmetic-only nitpicks.
endings:
  success: The team can find the decisions and details buried in chat.
  incomplete: Important messages are still difficult to find.
  partial: The milestone could not be fully assessed.
---
The team agreed on a decision last week, but no one remembers which channel or phrase contained it. Add message search across channels. Results should match message text without confusing a search for `build` with `builder`, show the channel and author, and open the message in its conversation. Handle empty queries and no matches without showing stale results.
