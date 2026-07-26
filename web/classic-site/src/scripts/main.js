// ── Third-party dependencies (Vite resolves from node_modules) ──
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";

// ── Global styles ────────────────────────────────────────────────
import "../styles/main.css";

// ── Page widgets (each guards itself via DOM checks) ─────────────
import { setupCounter } from "./counter";

// ── Bootstrap ────────────────────────────────────────────────────
$(() => {
  setupCounter();
});
