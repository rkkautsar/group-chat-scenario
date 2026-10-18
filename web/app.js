const channels = await fetch("/api/channels").then((r) => r.json());
const messages = await fetch("/api/messages").then((r) => r.json());
let activeChannel = channels[0]?.id ?? "general";
const channelNav = document.querySelector("#channels");
const messageList = document.querySelector("#messages");

function drawChannels() {
  channelNav.replaceChildren();
  for (const channel of channels) {
    const button = document.createElement("button");
    button.className = "channel" + (channel.id === activeChannel ? " active" : "");
    button.textContent = "# " + channel.name;
    button.onclick = () => { activeChannel = channel.id; drawChannels(); drawMessages(); };
    channelNav.append(button);
  }
  document.querySelector("#channel-name").textContent = "# " + channels.find((c) => c.id === activeChannel)?.name;
  document.querySelector("#message").setAttribute("aria-label", "Message in " + channels.find((c) => c.id === activeChannel)?.name);
}

function drawMessages() {
  messageList.replaceChildren();
  for (const message of messages.filter((item) => item.channel === activeChannel)) {
    const row = document.createElement("article");
    row.className = "message";
    row.dataset.messageId = message.id;
    const header = document.createElement("header");
    const author = document.createElement("strong"); author.textContent = message.author;
    const time = document.createElement("time"); time.textContent = message.time;
    header.append(author, time);
    const body = document.createElement("p"); body.textContent = message.body;
    const actions = document.createElement("div"); actions.className = "message-actions";
    const reply = document.createElement("button"); reply.textContent = "Reply"; reply.type = "button";
    actions.append(reply);
    row.append(header, body, actions);
    messageList.append(row);
  }
}

document.querySelector("#composer").addEventListener("submit", async (event) => {
  event.preventDefault();
  const field = document.querySelector("#message");
  if (!field.value.trim()) return;
  const response = await fetch("/api/messages", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ channel: activeChannel, body: field.value.trim() }) });
  if (!response.ok) return;
  messages.push(await response.json()); field.value = ""; drawMessages();
});

document.querySelector("#search-button").addEventListener("click", async () => {
  const query = document.querySelector("#search").value;
  const results = await fetch("/api/search?q=" + encodeURIComponent(query)).then((r) => r.json());
  const target = document.querySelector("#search-results"); target.replaceChildren();
  for (const item of results) { const row = document.createElement("p"); row.textContent = `${item.author} in #${item.channel}: ${item.body}`; target.append(row); }
});

drawChannels(); drawMessages();
