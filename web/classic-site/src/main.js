// Bootstrap (JS + all of Bootstrap's CSS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// jQuery
import $ from "jquery";

// Custom styles
import "./style.css";

// Make jQuery available globally for the console & inline scripts
window.$ = $;
window.jQuery = $;

// ── Counter ────────────────────────────────────────────────────
function setupCounter($btn) {
  let counter = 0;
  $btn.text(`Count is ${counter}`);
  $btn.on("click", () => {
    counter += 1;
    $btn.text(`Count is ${counter}`);
  });
}

// ── Render page ─────────────────────────────────────────────────
function render() {
  $("#app").html(`
    <nav class="navbar navbar-expand-md sticky-top border-bottom bg-body">
      <div class="container-xxl">
        <span class="navbar-brand mb-0 h5">
          <span class="badge bg-primary rounded-pill px-3 py-2">classic-site</span>
        </span>
        <ul class="navbar-nav ms-auto flex-row gap-2">
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
              <svg class="bi me-1" width="16" height="16" fill="currentColor"><use href="#github-icon"/></svg>
              GitHub
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <svg class="bi me-1" width="16" height="16" fill="currentColor"><use href="#book-icon"/></svg>
              Bootstrap Docs
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="container-xxl py-5">
      <!-- Hero -->
      <div class="text-center py-5 mb-5">
        <span class="badge bg-info text-dark mb-3 px-3 py-1 rounded-pill">
          Vite + jQuery + Bootstrap
        </span>
        <h1 class="display-3 fw-semibold mb-3" style="letter-spacing: -1.5px;">
          Build Fast.<br>Ship Faster.
        </h1>
        <p class="lead text-secondary mx-auto mb-4" style="max-width: 560px;">
          A classic web starter powered by <strong>Vite+</strong>, <strong>jQuery</strong>, and
          <strong>Bootstrap 5</strong>. Edit <code>src/main.js</code> and see your changes instantly.
        </p>
        <div class="d-flex justify-content-center gap-3">
          <button id="counter" class="btn btn-primary btn-lg px-4" type="button"></button>
          <a class="btn btn-outline-secondary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
            Vite Docs
          </a>
        </div>
      </div>

      <!-- Feature cards -->
      <div class="row g-4 pb-5">
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 rounded-4">
            <div class="card-body p-4">
              <div class="fs-2 mb-3">⚡</div>
              <h5 class="card-title">Instant HMR</h5>
              <p class="card-text text-secondary">
                Lightning-fast Hot Module Replacement so you can iterate at the speed of thought.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 rounded-4">
            <div class="card-body p-4">
              <div class="fs-2 mb-3">🚀</div>
              <h5 class="card-title">Optimized Build</h5>
              <p class="card-text text-secondary">
                Powered by Rolldown for production builds that are fast and lean out of the box.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 rounded-4">
            <div class="card-body p-4">
              <div class="fs-2 mb-3">💡</div>
              <h5 class="card-title">No Framework Required</h5>
              <p class="card-text text-secondary">
                Plain HTML and JavaScript — use jQuery for DOM scripting without any SPA framework overhead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="border-top py-4 text-center">
      <small class="text-secondary">
        Built with Vite+ · jQuery &amp; Bootstrap 5 · Ready for production
      </small>
    </footer>
  `);

  // Wire up the counter after the DOM is injected
  setupCounter($("#counter"));
}

$(render);
