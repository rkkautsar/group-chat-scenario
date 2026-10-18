import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const channels = [
  { id: "general", name: "general", description: "The whole team" },
  { id: "launch", name: "launch", description: "Product launch" },
];
const messages = [
  { id: "m1", channel: "general", author: "Sam", body: "The build notes are ready for review.", time: "09:42", replies: [] },
  { id: "m2", channel: "general", author: "Maya", body: "I will post the screenshots after lunch.", time: "09:48", replies: [] },
  { id: "m3", channel: "launch", author: "Alex", body: "The launch checklist is almost done.", time: "10:05", replies: [] },
];
const preferences = { muted: [] };
const notifications = [
  { id: "n1", channel: "general", text: "Sam mentioned you in #general", message: "The build notes are ready for review." },
  { id: "n2", channel: "launch", text: "Alex mentioned you in #launch", message: "The launch checklist is almost done." },
];
const send = (res, status, data) => {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
};

createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname.startsWith("/api/")) {
    if (req.method === "GET" && url.pathname === "/api/channels") return send(res, 200, channels);
    if (req.method === "GET" && url.pathname === "/api/messages") return send(res, 200, messages);
    if (req.method === "GET" && url.pathname === "/api/notifications") return send(res, 200, notifications.filter((item) => !preferences.muted.includes(item.channel)));
    if (req.method === "GET" && url.pathname === "/api/preferences") return send(res, 200, preferences);
    if (req.method === "GET" && url.pathname === "/api/search") return send(res, 200, []);
    if (req.method === "POST" && url.pathname === "/api/messages") {
      let body = "";
      for await (const chunk of req) body += chunk;
      const input = JSON.parse(body);
      const message = { id: "m" + (messages.length + 1), channel: input.channel, author: "You", body: input.body, time: "now", replies: [] };
      messages.push(message);
      return send(res, 201, message);
    }
    return send(res, 404, { error: "Not found" });
  }
  const path = normalize(join(process.cwd(), "web", url.pathname === "/" ? "index.html" : url.pathname));
  if (!path.startsWith(join(process.cwd(), "web"))) return send(res, 403, {});
  try {
    const content = await readFile(path);
    res.writeHead(200, { "content-type": ({ ".html": "text/html", ".css": "text/css", ".js": "text/javascript" })[extname(path)] ?? "application/octet-stream" });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}).listen(4173, "127.0.0.1");
