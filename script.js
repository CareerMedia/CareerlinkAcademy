const moduleKeys = modules.map((module) => module.id);
const completed = new Set(JSON.parse(localStorage.getItem("careerlink-completed") || "[]"));
const moduleGrid = document.querySelector("#module-grid");
const certificateSection = document.querySelector("#certificate-section");
const activityContent = document.querySelector("#activity-content");

let youtubePlayer = null;
const youtubePlayerQueue = [];

window.onYouTubeIframeAPIReady = () => {
  youtubePlayerQueue.forEach((createPlayer) => {
    createPlayer();
  });

  youtubePlayerQueue.length = 0;
};

function prepareVideoCompletion(module) {
  const completeButton = document.querySelector("#complete-lesson");
  const video = module.activityDetails?.video;

  completeButton.disabled = false;
completeButton.innerHTML =
  'Mark lesson complete <span aria-hidden="true">✓</span>';

if (youtubePlayer) {
  youtubePlayer.destroy();
  youtubePlayer = null;
}

if (completed.has(module.id)) {
  completeButton.disabled = true;
  completeButton.innerHTML =
    'Module completed <span aria-hidden="true">✓</span>';

  return;
}

  if (
    video?.provider !== "youtube" ||
    !video.videoId ||
    !document.querySelector("#youtube-player")
  ) {
    return;
  }

  completeButton.disabled = true;
  completeButton.textContent = "Watch video to unlock completion";

  const createPlayer = () => {
    const iframe = document.querySelector("#youtube-player");

    if (!iframe || !window.YT?.Player) {
      return;
    }

    youtubePlayer = new YT.Player("youtube-player", {
      events: {
        onStateChange(event) {
          if (event.data === YT.PlayerState.ENDED) {
            completeButton.disabled = false;
            completeButton.innerHTML =
              'Mark lesson complete <span aria-hidden="true">✓</span>';
          }
        }
      }
    });
  };

  if (window.YT?.Player) {
    createPlayer();
  } else {
    youtubePlayerQueue.push(createPlayer);
  }
}

/* =========================================
   APP STATE AND DOM REFERENCES
   ========================================= */

   /*
  Activity content editor note:

  Each activity type below controls the lesson content
  shown when a module opens.

  The activityType value comes from modules.js.
  If you create a new activity type, add a matching
  renderer here.
*/
function renderActivity(module) {

  // ===== MODULE 1: WELCOME VIDEO =====
  if (module.activityType === "video") {
    const details = module.activityDetails || {
    video: {
    provider: "youtube",
    videoId: "",
    captionsAvailable: false
    },
    videoMessage: "Video playback will appear here.",
    sections: []
  };
  const hasYoutubeVideo =
  details.video?.provider === "youtube" &&
  details.video.videoId;

const captionsParam = details.video?.captionsAvailable
  ? "&cc_load_policy=1"
  : "";

const originParam =
  window.location.origin !== "null"
    ? `&origin=${encodeURIComponent(window.location.origin)}`
    : "";

const videoMarkup = hasYoutubeVideo
  ? `
    <div class="video-embed">
      <iframe
        id="youtube-player"
        src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          details.video.videoId
        )}?enablejsapi=1${originParam}&rel=0${captionsParam}"
        title="${module.lessonTitle}"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  `
  : `
    <div
      class="video-placeholder"
      role="group"
      aria-label="${module.lessonTitle} video placeholder"
    >
      <div class="video-play" aria-hidden="true">▶</div>

      <strong>${module.lessonTitle} video coming soon</strong>

      <span>
        ${details.videoMessage}
      </span>
    </div>
  `;
  activityContent.innerHTML = `
    ${videoMarkup}

    <div class="lesson-grid">
      ${details.sections
        .map(
          (section) => `
            <div>
              <strong>${section.heading}</strong>
              <p>${section.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}
// ===== MODULE 2: WORKSPACE CHECKLIST =====
else if (module.activityType === "video-checklist") {
  const details = module.activityDetails || {
    videoMessage: "Workspace setup video coming soon.",
    accessibilityNote:
      "A written transcript and checklist will be available below the video.",
    checklistTitle: "Required tools",
    checklistDescription: "",
    checklistItems: [],
    supportTitle: "Why this matters",
    supportText: ""
  };

  activityContent.innerHTML = `
    <div
      class="video-placeholder"
      role="group"
      aria-label="${module.lessonTitle} video placeholder"
    >
      <div class="video-play" aria-hidden="true">▶</div>

      <strong>${module.lessonTitle} video coming soon</strong>

      <span>
        ${details.videoMessage}
      </span>
    </div>

    <p class="transcript-note">
      <strong>Accessibility note:</strong>
      ${details.accessibilityNote}
    </p>

    <div class="lesson-grid activity-checklist">
      <div>
        <strong>${details.checklistTitle}</strong>

        <p>
          ${details.checklistDescription}
        </p>

        ${details.checklistItems
          .map(
            (item) => `
              <label>
                <input type="checkbox" name="workspace-item">
                ${item}
              </label>
            `
          )
          .join("")}
      </div>

      <div>
        <strong>${details.supportTitle}</strong>

        <p>
          ${details.supportText}
        </p>
      </div>
    </div>
  `;
}
// ===== MODULE 3: CAREERLINK SCAVENGER HUNT =====
else if (module.activityType === "scavenger-hunt") {
  const details = module.activityDetails || {
    missionTitle: "Your mission",
    missionText: "",
    completionTitle: "How to complete this activity",
    completionText: "",
    areasTitle: "Explore these CareerLink areas",
    areas: [],
    futureActivityNote: ""
  };

  activityContent.innerHTML = `
    <div class="lesson-grid">
      <div>
        <strong>${details.missionTitle}</strong>

        <p>
          ${details.missionText}
        </p>
      </div>

      <div>
        <strong>${details.completionTitle}</strong>

        <p>
          ${details.completionText}
        </p>
      </div>
    </div>

    <div class="activity-mission">
      <h3>${details.areasTitle}</h3>

      <ol>
        ${details.areas
          .map((area) => `<li>${area}</li>`)
          .join("")}
      </ol>

      <p class="transcript-note">
        ${details.futureActivityNote}
      </p>
    </div>
  `;
}
// ===== MODULE 4: DAILY WORK RHYTHM =====
else if (module.activityType === "timeline") {
  const details = module.activityDetails || {
    timelineTitle: "Your CareerLink work rhythm",
    timelineItems: []
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.timelineTitle}</h3>

      ${details.timelineItems
        .map(
          (item) => `
            <div class="timeline-item">
              <strong>${item.label}</strong>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

// ===== MODULE 5: EVENTS TAB =====
else if (module.activityType === "events-overview") {
  const details = module.activityDetails || {
    overviewTitle: "What is the Events Tab?",
    overviewText: "",
    requirementsTitle: "What an event listing should include",
    requirements: [],
    nextTitle: "What you will learn next",
    nextText: ""
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.overviewTitle}</h3>

      <p>
        ${details.overviewText}
      </p>

      <h3>${details.requirementsTitle}</h3>

      <ul>
        ${details.requirements
          .map((requirement) => `<li>${requirement}</li>`)
          .join("")}
      </ul>

      <h3>${details.nextTitle}</h3>

      <p>
        ${details.nextText}
      </p>
    </div>
  `;
}

// ===== MODULE 6: ACADEMIC PROGRAM OVERVIEW =====
else if (module.activityType === "interactive-example") {
  const details = module.activityDetails || {
    overviewTitle: "What is an academic program update?",
    overviewText: "",
    examineTitle: "What you will examine",
    examineItems: [],
    nextTitle: "What you will learn next",
    nextText: ""
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.overviewTitle}</h3>

      <p>
        ${details.overviewText}
      </p>

      <h3>${details.examineTitle}</h3>

      <ul>
        ${details.examineItems
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>${details.nextTitle}</h3>

      <p>
        ${details.nextText}
      </p>
    </div>
  `;
}

// ===== MODULE 7: ACADEMIC PROGRAM BUILDER =====
else if (module.activityType === "academic-builder") {
  const details = module.activityDetails || {
    overviewTitle: "Building a new academic program",
    overviewText: "",
    preparationTitle: "Before you begin",
    preparationItems: [],
    approvalTitle: "Important approval rule",
    approvalText: "",
    practiceTitle: "What you will practice later",
    practiceText: ""
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.overviewTitle}</h3>

      <p>
        ${details.overviewText}
      </p>

      <h3>${details.preparationTitle}</h3>

      <ul>
        ${details.preparationItems
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>${details.approvalTitle}</h3>

      <p>
        ${details.approvalText}
      </p>

      <h3>${details.practiceTitle}</h3>

      <p>
        ${details.practiceText}
      </p>
    </div>
  `;
}
// ===== MODULE 8: CAREERLINK TAXONOMY =====
else if (module.activityType === "matching") {
  const details = module.activityDetails || {
    overviewTitle: "What is CareerLink taxonomy?",
    overviewText: "",
    importanceTitle: "Why taxonomy matters",
    importanceItems: [],
    examineTitle: "What you will examine",
    examineText: "",
    exampleTitle: "Example resource",
    exampleText: "",
    questionTitle: "Key question",
    questionText: ""
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.overviewTitle}</h3>

      <p>
        ${details.overviewText}
      </p>

      <h3>${details.importanceTitle}</h3>

      <ul>
        ${details.importanceItems
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>${details.examineTitle}</h3>

      <p>
        ${details.examineText}
      </p>

      <div class="lesson-grid">
        <div>
          <strong>${details.exampleTitle}</strong>

          <p>
            ${details.exampleText}
          </p>
        </div>

        <div>
          <strong>${details.questionTitle}</strong>

          <p>
            ${details.questionText}
          </p>
        </div>
      </div>
    </div>
  `;
}

// ===== MODULE 9: CAREERLINK ARTICLES =====
else if (module.activityType === "article-practice") {
  const details = module.activityDetails || {
    overviewTitle: "Working with CareerLink articles",
    overviewText: "",
    tasksTitle: "Common article tasks",
    tasks: [],
    beforeTitle: "Before creating a new article",
    beforeText: "",
    qualityTitle: "Good article content",
    qualityText: "",
    reviewTitle: "Review before publishing",
    reviewText: "",
    practiceNote: ""
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.overviewTitle}</h3>

      <p>
        ${details.overviewText}
      </p>

      <h3>${details.tasksTitle}</h3>

      <ul>
        ${details.tasks
          .map((task) => `<li>${task}</li>`)
          .join("")}
      </ul>

      <h3>${details.beforeTitle}</h3>

      <p>
        ${details.beforeText}
      </p>

      <div class="lesson-grid">
        <div>
          <strong>${details.qualityTitle}</strong>

          <p>
            ${details.qualityText}
          </p>
        </div>

        <div>
          <strong>${details.reviewTitle}</strong>

          <p>
            ${details.reviewText}
          </p>
        </div>
      </div>

      <p class="transcript-note">
        <strong>What you will practice later:</strong>
        ${details.practiceNote}
      </p>
    </div>
  `;
}

// ===== MODULE 10: BROKEN-LINK DETECTIVE =====
else if (module.activityType === "detective-challenge") {
  const details = module.activityDetails || {
    overviewTitle: "What is broken-link maintenance?",
    overviewText: "",
    workflowTitle: "The basic workflow",
    workflowSteps: [],
    solutionsTitle: "Not every broken link has the same solution",
    solutions: [],
    toolsTitle: "Tools you may use",
    toolsText: "",
    practiceTitle: "What you will practice later",
    practiceText: ""
  };

  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>${details.overviewTitle}</h3>

      <p>
        ${details.overviewText}
      </p>

      <h3>${details.workflowTitle}</h3>

      <ol>
        ${details.workflowSteps
          .map((step) => `<li>${step}</li>`)
          .join("")}
      </ol>

      <h3>${details.solutionsTitle}</h3>

      <ul>
        ${details.solutions
          .map((solution) => `<li>${solution}</li>`)
          .join("")}
      </ul>

      <div class="lesson-grid">
        <div>
          <strong>${details.toolsTitle}</strong>

          <p>
            ${details.toolsText}
          </p>
        </div>

        <div>
          <strong>${details.practiceTitle}</strong>

          <p>
            ${details.practiceText}
          </p>
        </div>
      </div>
    </div>
  `;
}

// Fallback for a missing or unsupported activity type
else {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>Activity coming soon</h3>

      <p>
        This lesson is being prepared. Please check back later or contact the
        CareerLink team for guidance.
      </p>
    </div>
  `;
}
}

/* =========================================
   ACTIVITY CONTENT RENDERING

   This currently contains the lesson layouts
   for each activity type. Written module content
   should eventually move into modules.js.
   ========================================= */

function renderModules() {

  const phaseOrder = [
    "Orientation",
    "CareerLink Fundamentals",
    "Content Workflows",
    "Maintenance"
  ];
  
  function renderModuleCard(module) {
    const isAvailable = module.available === true;
    const buttonText = isAvailable
      ? "Open lesson"
      : "Activity coming next";

    return `
      <article class="module-card" data-module="${module.id}">

        <span class="tag">${module.label}</span>

        <h3>${module.title}</h3>

        <p>${module.description}</p>

        <button
          class="module-button"
          data-complete="${module.id}"
          aria-controls="lesson-panel"
          aria-expanded="false"
          ${isAvailable ? "" : "disabled"}
        >
          ${buttonText}
          <span>${isAvailable ? "→" : "🔒"}</span>
        </button>
      </article>
    `;
  }

  moduleGrid.innerHTML = phaseOrder
    .map((phase) => {
      const phaseModules = modules.filter(
        (module) => module.phase === phase
      );

      if (phaseModules.length === 0) {
        return "";
      }

      return `
        <section class="phase-group" aria-labelledby="phase-${phase
          .toLowerCase()
          .replace(/\s+/g, "-")}">

          <div class="phase-heading">
            <p class="phase-kicker">LEARNING PHASE</p>
            <h3 id="phase-${phase
              .toLowerCase()
              .replace(/\s+/g, "-")}">
              ${phase}
            </h3>
          </div>

          <div class="phase-carousel">
  <button
    class="phase-arrow phase-arrow-left"
    type="button"
    aria-label="Scroll ${phase} modules left"
  >
    ‹
  </button>

  <div class="phase-grid" tabindex="0">
    ${phaseModules.map(renderModuleCard).join("")}
  </div>

  <button
    class="phase-arrow phase-arrow-right"
    type="button"
    aria-label="Scroll ${phase} modules right"
  >
    ›
  </button>
</div>
        </section>
      `;
    })
    .join("");
}
renderModules();
document.querySelectorAll(".phase-carousel").forEach((carousel) => {
  const moduleStrip = carousel.querySelector(".phase-grid");
  const leftArrow = carousel.querySelector(".phase-arrow-left");
  const rightArrow = carousel.querySelector(".phase-arrow-right");

  const scrollDistance = 320;

  leftArrow.addEventListener("click", () => {
    moduleStrip.scrollBy({
      left: -scrollDistance,
      behavior: "smooth"
    });
  });

  rightArrow.addEventListener("click", () => {
    moduleStrip.scrollBy({
      left: scrollDistance,
      behavior: "smooth"
    });
  });
});
const lessonPanel = document.querySelector("#lesson-panel");
const closeLessonButton = document.querySelector("#close-lesson");
let lastTrigger = null;

/* =========================================
   PROGRESS AND COMPLETION STATE
   ========================================= */

function updateProgress() {
  const completedCount = moduleKeys.filter((key) => completed.has(key)).length;
  const percent = Math.round((completedCount / moduleKeys.length) * 100);
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  document.querySelector("#module-count").textContent = `${completedCount} of ${moduleKeys.length} complete`;
  certificateSection.hidden = completedCount !== moduleKeys.length;
  document.querySelectorAll("[data-module]").forEach((card) => {
    const key = card.dataset.module;
    const button = card.querySelector("button");
    const isComplete = completed.has(key);
    card.classList.toggle("completed", isComplete);
    button.innerHTML = isComplete ? 'Review module <span aria-hidden="true">↗</span>' : 'Open module <span aria-hidden="true">→</span>';
  });
}

/* =========================================
   USER INTERACTION HANDLERS
   ========================================= */

document.querySelectorAll("[data-complete]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedModule = modules.find(
  (module) => module.id === button.dataset.complete
);

if (!selectedModule) {
  return;
}
renderActivity(selectedModule);

document.querySelector("#lesson-type").textContent =
  selectedModule.type.toUpperCase();

document.querySelector("#lesson-title").textContent =
  selectedModule.lessonTitle;

document.querySelector("#lesson-description").textContent =
  selectedModule.lessonDescription;

    lastTrigger = button;

    const selectedPhase = button.closest(".phase-group");

if (selectedPhase) {
  selectedPhase.after(lessonPanel);
}
    lessonPanel.classList.remove("is-closing");
    lessonPanel.hidden = false;
    prepareVideoCompletion(selectedModule);

    button.setAttribute("aria-expanded", "true");

    lessonPanel.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    lessonPanel.focus();
  });
});

function closeLesson() {
  if (lessonPanel.hidden) {
    return;
  }

  lessonPanel.classList.add("is-closing");

  const finishClose = (event) => {
    if (event.animationName !== "lessonClose") {
      return;
    }

    if (!lessonPanel.classList.contains("is-closing")) {
      return;
    }

    lessonPanel.hidden = true;
    lessonPanel.classList.remove("is-closing");
  };

  lessonPanel.addEventListener("animationend", finishClose, {
    once: true
  });

  if (lastTrigger) {
    lastTrigger.setAttribute("aria-expanded", "false");
    lastTrigger.focus();
  }
}
closeLessonButton.addEventListener("click", closeLesson);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lessonPanel.hidden) {
    closeLesson();
  }
})

document.querySelector("#complete-lesson").addEventListener("click", () => {
  completed.add(lastTrigger.dataset.complete);
  localStorage.setItem("careerlink-completed", JSON.stringify([...completed]));
  updateProgress();
  closeLesson();
});

/* =========================================
   HELP CENTER SEARCH
   ========================================= */

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.querySelector("#search").value.trim();
  document.querySelector("#search-result").textContent = query
    ? `Help Center search is ready for “${query}.” Next, we’ll connect this to real articles.`
    : "Try searching for a task, tool, or problem.";
});

/* =========================================
   INITIAL PAGE UPDATE
   ========================================= */

updateProgress();
