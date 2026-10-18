---
title: Let people quiet noisy channels
mode: milestone
pool: group-chat
requiredCheck: Chat E2E / muting
workflowPath: .github/workflows/chat-e2e.yml
visibleEvaluatorFiles:
  - playwright.config.js
  - test/e2e/threads.spec.js
  - test/e2e/mentions.spec.js
  - test/e2e/search.spec.js
  - test/e2e/muting.spec.js
protectedFiles:
  - .github/workflows/chat-e2e.yml
  - scripts/active-cards.sh
  - playwright.config.js
  - test/e2e/threads.spec.js
  - test/e2e/mentions.spec.js
  - test/e2e/search.spec.js
  - test/e2e/muting.spec.js
evaluation:
  issueBreakdown: Reward reviewable slices for muting a channel, persisting the preference, and applying it to notifications without hiding the channel or its messages. One broad issue for the full feature earns low breakdown credit; issue count itself is not a gate.
  issueClarity: Reward concrete rules for persistence and notification suppression, plus acceptance criteria that let an agent work with few clarification rounds.
  pullRequestQuality: Judge preference correctness across reloads, notification behavior, usability, accessibility, tests, and maintainability.
  reviewQuality: Reward actionable feedback about preference persistence, notification delivery, or regressions. Give little credit for cosmetic-only nitpicks.
endings:
  success: People can stay in the workspace without being overwhelmed by every channel.
  incomplete: Channel noise still disrupts the team.
  partial: The milestone could not be fully assessed.
---
The launch channel is busy, and some teammates need to focus without leaving the workspace. Let each person mute and unmute a channel. Keep the preference after a reload and suppress that channel's notifications for the person, while leaving the channel and its messages available. Make the control's current state clear to screen readers and keyboard users.

The visible acceptance test is `test/e2e/muting.spec.js`. Its seeded notifications include one from #general and one from #launch. Open `Notifications` and confirm both are initially visible. Activate the #general mute control, reload, and confirm the control now offers unmuting. Open `Notifications` again: the #general notification must be absent and the #launch notification must remain visible. The control is identified by its accessible name and visible state, not an internal test ID. Run it with `npm run test:e2e -- test/e2e/muting.spec.js`.
