const moduleKeys = modules.map((module) => module.id);
const completed = new Set(JSON.parse(localStorage.getItem("careerlink-completed") || "[]"));
const moduleGrid = document.querySelector("#module-grid");
const certificateSection = document.querySelector("#certificate-section");
const activityContent = document.querySelector("#activity-content");
function renderActivity(module) {
  if (module.activityType === "video") {
    activityContent.innerHTML = `
      <div
        class="video-placeholder"
        role="group"
        aria-label="${module.lessonTitle} video placeholder"
      >
        <div class="video-play" aria-hidden="true">▶</div>
        <strong>${module.lessonTitle} video coming soon</strong>
        <span>
          Video playback, captions, and transcript will appear here.
        </span>
      </div>

      <p class="transcript-note">
        <strong>Accessibility note:</strong>
        A written transcript will be available below the video.
      </p>
      <div class="lesson-grid">
  <div>
    <strong>In this video</strong>
    <p>
      Learn the purpose of CareerLink and how your work helps students find
      accurate resources.
    </p>
  </div>

  <div>
    <strong>After watching</strong>
    <p>
      Explore the training hub and continue to your first hands-on activity.
    </p>
  </div>
</div>
    `;
  }
  else if (module.activityType === "video-checklist") {
  activityContent.innerHTML = `
    <div
      class="video-placeholder"
      role="group"
      aria-label="${module.lessonTitle} video placeholder"
    >
      <div class="video-play" aria-hidden="true">▶</div>
      <strong>${module.lessonTitle} video coming soon</strong>
      <span>
        This video will explain the tools used for different CareerLink tasks.
      </span>
    </div>

    <p class="transcript-note">
      <strong>Accessibility note:</strong>
      A written transcript and checklist will be available below the video.
    </p>

<div class="lesson-grid activity-checklist">
  <div>
    <strong>Required tools</strong>
    <p>
      Keep the tools required for your current assignment available before
      you begin working.
    </p>

    <label>
      <input type="checkbox" name="workspace-item">
      Browser is open
    </label>

    <label>
      <input type="checkbox" name="workspace-item">
      CareerLink is open
    </label>

    <label>
      <input type="checkbox" name="workspace-item">
      CSUN Box is available
    </label>

    <label>
      <input type="checkbox" name="workspace-item">
      Task-specific tools are ready
    </label>
  </div>

  <div>
    <strong>Why this matters</strong>
    <p>
      Preparing your workspace reduces interruptions and makes recurring tasks
      easier to complete accurately.
    </p>
  </div>
</div>
  `;
}
else if (module.activityType === "scavenger-hunt") {
  activityContent.innerHTML = `
    <div class="lesson-grid">
      <div>
        <strong>Your mission</strong>
        <p>
          Explore CareerLink and locate the areas listed below. You do not need
          to memorize everything. The goal is to learn where information lives.
        </p>
      </div>

      <div>
        <strong>How to complete this activity</strong>
        <p>
          Visit each location, make a note of what you found, and return here
          when you are ready for the quiz portion.
        </p>
      </div>
    </div>

    <div class="activity-mission">
      <h3>Explore these CareerLink areas</h3>

      <ol>
        <li>Find one academic program.</li>
        <li>Find one department page.</li>
        <li>Find one event listing.</li>
        <li>Find one CareerLink article.</li>
        <li>Find one external resource link.</li>
        <li>Find where taxonomy information is displayed.</li>
      </ol>

      <p class="transcript-note">
        The scored scavenger-hunt quiz will be added in a later stage.
      </p>
    </div>
  `;
}
else if (module.activityType === "timeline") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>Your CareerLink work rhythm</h3>

      <div class="timeline-item">
        <strong>Daily</strong>
        <p>
          Review assigned requests, check priorities, and complete current
          content updates.
        </p>
      </div>

      <div class="timeline-item">
        <strong>Weekly</strong>
        <p>
          Review unfinished work, confirm that requests are documented, and
          communicate questions or progress.
        </p>
      </div>

      <div class="timeline-item">
        <strong>Monthly</strong>
        <p>
          Work through recurring maintenance tasks such as reviewing broken-link
          reports.
        </p>
      </div>

      <div class="timeline-item">
        <strong>Special requests</strong>
        <p>
          Respond to approved requests involving events, academic programs,
          articles, or other CareerLink content.
        </p>
      </div>
    </div>
  `;
}
else if (module.activityType === "events-overview") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>What is the Events Tab?</h3>

      <p>
        The Events Tab helps CareerLink share workshops, fairs, appointments,
        information sessions, and other opportunities with students.
      </p>

      <h3>What an event listing should include</h3>

      <ul>
        <li>A clear and accurate event title</li>
        <li>Date, time, and location information</li>
        <li>A useful description</li>
        <li>Registration or event links</li>
        <li>Accessible and relevant images, when needed</li>
      </ul>

      <h3>What you will learn next</h3>

      <p>
        You will later practice creating a sample event, previewing it, checking
        its accuracy, and confirming that it remains unpublished.
      </p>
    </div>
  `;
}
else if (module.activityType === "interactive-example") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>What is an academic program update?</h3>

      <p>
        Academic program updates help keep CareerLink information aligned with
        the university's current program catalog. These updates allow students
        to find accurate descriptions of programs, departments, and related
        career information.
      </p>

      <h3>What you will examine</h3>

      <ul>
        <li>The name and type of an academic program</li>
        <li>The department connected to the program</li>
        <li>The program description</li>
        <li>Career-related information and resources</li>
        <li>The approved source used to verify the information</li>
      </ul>

      <h3>What you will learn next</h3>

      <p>
        You will later explore a real academic program and identify what each
        part of the program means before creating or updating one yourself.
      </p>
    </div>
  `;
}
else if (module.activityType === "academic-builder") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>Building a new academic program</h3>

      <p>
        Creating an academic program requires careful research, accurate
        information, and clear organization. The goal is to build a useful
        draft using approved university sources.
      </p>

      <h3>Before you begin</h3>

      <ul>
        <li>Locate the official academic program catalog.</li>
        <li>Confirm the program's current name and department.</li>
        <li>Review the approved program description.</li>
        <li>Gather relevant career information and resources.</li>
        <li>Understand which fields require approval before publishing.</li>
      </ul>

      <h3>Important approval rule</h3>

      <p>
        Student assistants may prepare and organize a draft, but the program
        should be reviewed by the appropriate staff member before it is
        published on CareerLink.
      </p>

      <h3>What you will practice later</h3>

      <p>
        You will build a draft for an actual academic program, compare it with
        approved sources, complete a quality checklist, and submit it for
        review.
      </p>
    </div>
  `;
}
else if (module.activityType === "matching") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>What is CareerLink taxonomy?</h3>

      <p>
        Taxonomy is the system CareerLink uses to organize content into
        meaningful categories. It helps students find related programs,
        articles, and resources more easily.
      </p>

      <h3>Why taxonomy matters</h3>

      <ul>
        <li>It keeps related content connected.</li>
        <li>It improves navigation and discoverability.</li>
        <li>It helps prevent resources from being misplaced.</li>
        <li>It creates consistency across CareerLink pages.</li>
      </ul>

      <h3>What you will examine</h3>

      <p>
        You will later review examples of CareerLink content and identify which
        taxonomy terms or categories best match each item.
      </p>

      <div class="lesson-grid">
        <div>
          <strong>Example resource</strong>
          <p>
            A resume-writing workshop should be connected to categories related
            to career preparation and student support.
          </p>
        </div>

        <div>
          <strong>Key question</strong>
          <p>
            Ask: “Which category would help a student find this resource?”
          </p>
        </div>
      </div>
    </div>
  `;
}
else if (module.activityType === "article-practice") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>Working with CareerLink articles</h3>

      <p>
        Articles are one of the main ways CareerLink stores useful information,
        explains services, and connects students with external resources.
      </p>

      <h3>Common article tasks</h3>

      <ul>
        <li>Review and update an existing article.</li>
        <li>Create a new article when an approved resource needs to be added.</li>
        <li>Write a clear and useful title.</li>
        <li>Format content so it is easy to scan.</li>
        <li>Add and test external links.</li>
        <li>Review the page before it is published.</li>
      </ul>

      <h3>Before creating a new article</h3>

      <p>
        First determine whether the information belongs in an existing article.
        Creating duplicate pages can make CareerLink harder to maintain and
        harder for students to navigate.
      </p>

      <div class="lesson-grid">
        <div>
          <strong>Good article content</strong>
          <p>
            Clear, accurate, current, relevant to students, and connected to
            an appropriate category.
          </p>
        </div>

        <div>
          <strong>Review before publishing</strong>
          <p>
            Check the title, formatting, links, source information, accessibility,
            and page placement.
          </p>
        </div>
      </div>

      <p class="transcript-note">
        <strong>What you will practice later:</strong>
        You will revise a sample article and decide whether it should be updated
        or replaced with a new page.
      </p>
    </div>
  `;
}
else if (module.activityType === "detective-challenge") {
  activityContent.innerHTML = `
    <div class="activity-mission">
      <h3>What is broken-link maintenance?</h3>

      <p>
        Broken-link maintenance involves reviewing links on CareerLink,
        determining what caused a link to fail, and deciding whether the link
        should be repaired, replaced, removed, or escalated.
      </p>

      <h3>The basic workflow</h3>

      <ol>
        <li>Review the broken-link report.</li>
        <li>Locate the affected CareerLink page.</li>
        <li>Investigate the link and determine what happened.</li>
        <li>Find an approved replacement when necessary.</li>
        <li>Update or remove the link.</li>
        <li>Document the completed work.</li>
      </ol>

      <h3>Not every broken link has the same solution</h3>

      <ul>
        <li>A temporary outage may need to be monitored.</li>
        <li>A redirected page may need to be updated.</li>
        <li>A permanently removed page may need a replacement.</li>
        <li>A suspicious link should be escalated before being opened.</li>
      </ul>

      <div class="lesson-grid">
        <div>
          <strong>Tools you may use</strong>
          <p>
            Broken-link reports, Screaming Frog, a web browser, approved source
            pages, and CSUN Box documentation.
          </p>
        </div>

        <div>
          <strong>What you will practice later</strong>
          <p>
            You will review sample report entries, classify each problem, choose
            the appropriate action, and document the result.
          </p>
        </div>
      </div>
    </div>
  `;
}
}

function renderModules() {
  const iconColors = ["blue", "gold", "coral"];

  moduleGrid.innerHTML = modules
    .map((module, index) => {
      const isAvailable =
          module.id === "welcome" || module.id === "workspace" || module.id === "explore" || module.id === "day-in-life" || module.id === "events" || module.id === "academic-overview" || module.id === "academic-builder" || module.id === "taxonomy" || module.id === "articles" || module.id === "broken-links";
      const buttonText = isAvailable ? "Open lesson" : "Activity coming next";

      return `
        <article class="module-card" data-module="${module.id}">
          <div class="module-icon ${iconColors[index % iconColors.length]}">
            ${String(module.number).padStart(2, "0")}
          </div>

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
    })
    .join("");
}

renderModules();
const lessonPanel = document.querySelector("#lesson-panel");
const closeLessonButton = document.querySelector("#close-lesson");
let lastTrigger = null;

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
  `${String(selectedModule.number).padStart(2, "0")} · ${selectedModule.type.toUpperCase()}`;

document.querySelector("#lesson-title").textContent =
  selectedModule.lessonTitle;

document.querySelector("#lesson-description").textContent =
  selectedModule.lessonDescription;

    lastTrigger = button;

    lessonPanel.hidden = false;
    button.setAttribute("aria-expanded", "true");

    lessonPanel.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    lessonPanel.focus();
  });
});

function closeLesson(){
  lessonPanel.hidden = true;

  if (lastTrigger){
    lastTrigger.setAttribute("aria-expanded","false");
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

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.querySelector("#search").value.trim();
  document.querySelector("#search-result").textContent = query
    ? `Help Center search is ready for “${query}.” Next, we’ll connect this to real articles.`
    : "Try searching for a task, tool, or problem.";
});

updateProgress();
