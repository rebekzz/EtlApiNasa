/**
 * APOD Data Interface
 * Represents the structure of a NASA Astronomy Picture of the Day entry
 */
interface ApodData {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
}

// Initialize DOM elements and set footer year
const yearElement = document.getElementById("year") as HTMLElement;
const app = document.getElementById("app") as HTMLElement;

yearElement.textContent = new Date().getFullYear().toString();

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Format ISO date string to readable format
 */
function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Display loading state
 */
function showLoading(): void {
  app.innerHTML = `
    <div class="status loading fade-in">
      <div class="spinner" aria-hidden="true"></div>
      <span class="label">Transmitting</span>
      <p>Receiving signal from deep space…</p>
    </div>`;
}

/**
 * Display error state with message
 */
function showError(msg: string): void {
  app.innerHTML = `
    <div class="status error fade-in">
      <span class="label">Signal lost</span>
      <p>${escapeHtml(msg)}</p>
    </div>`;
}

/**
 * Render APOD data to HTML
 */
function renderApod(data: ApodData): void {
  const title = escapeHtml(data.title || "Untitled");
  const rawDate = data.date || "";
  const date = escapeHtml(formatDate(rawDate));
  const explanation = escapeHtml(data.explanation || "No explanation available.");
  const isVideo = data.media_type === "video";

  let media = "";
  if (isVideo) {
    const url = escapeHtml(data.url || "");
    media = `
      <div class="media-wrapper">
        <iframe src="${url}" title="${title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>`;
  } else {
    const src = escapeHtml(data.hdurl || data.url || "");
    media = `
      <div class="media-wrapper">
        <a class="media-link" href="${src}" target="_blank" rel="noopener noreferrer"
           aria-label="Open ${title} at full resolution">
          <img src="${src}" alt="${title}" loading="eager" />
        </a>
      </div>`;
  }

  app.innerHTML = `
    <section class="hero">
      <div class="label fade-in fade-in-delay-1">NASA · Astronomy Picture of the Day</div>
      <h1 class="title fade-in fade-in-delay-2">${title}</h1>
      <div class="meta fade-in fade-in-delay-3">
        <span class="dot"></span>
        <span class="date">${date}</span>
        <span>·</span>
        <span>${isVideo ? "Featured Video" : "Featured Image"}</span>
      </div>
    </section>

    <section class="media-section fade-in fade-in-delay-4">
      ${media}
      <div class="media-caption">
        <span>${isVideo ? "/ Embedded transmission" : "/ Click to view full resolution"}</span>
        <span>${escapeHtml(rawDate)}</span>
      </div>
    </section>

    <section class="explanation-section fade-in fade-in-delay-4">
      <div class="explanation-header">
        <span class="label">About this image</span>
        <h2>Field notes</h2>
      </div>
      <div class="explanation">
        <p>${explanation}</p>
      </div>
    </section>`;
}

/**
 * Load and render APOD data from JSON file
 */
async function loadApod(): Promise<void> {
  showLoading();
  try {
    const res = await fetch("apod_data.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    const data: ApodData = await res.json();
    if (!data || typeof data !== "object")
      throw new Error("Invalid data format.");
    renderApod(data);
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : "Something went wrong while fetching the data.";
    console.error("APOD fetch error:", e);
    showError(errorMessage);
  }
}

// Initialize on page load
loadApod();
