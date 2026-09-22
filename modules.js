/*
  CareerLink Assistant Academy
  Module Content File

  Edit this file when changing:
  - Module titles
  - Descriptions
  - Labels
  - Learning phases
  - Activity types
  - Completion rules

  Keep each module's "id" unchanged after deployment.
  The id is used by progress tracking.
*/

const modules = [
  {
    // ===== MODULE 1 | ORIENTATION =====
    id: "welcome",
    number: 1,
    title: "Welcome to CareerLink",
    type: "Welcome video",
    label: "HELLO MATADOR!",
    description:
      "Learn what CareerLink is, how your role supports the Career Center, and what to expect as a Program Assistant.",
    duration: "5 minutes",
    phase: "Orientation",
    available: true,
    lessonTitle: "Welcome to CareerLink",
    lessonDescription:
    "Start here to learn what CareerLink is, how your role supports the Career Center, and what you can expect as a Program Assistant.",
    
    activityDetails: {
      videoMessage:
      "Video playback, captions, and transcript will appear here.",

      accessibilityNote:
        "A written transcript will be available below the video.",

      sections: [
        {
          heading: "In this video",
          text:
            "Learn the purpose of CareerLink and how your work helps students find accurate resources."
        },
        {
          heading: "After watching",
          text:
            "Explore the training hub and continue to your first hands-on activity."
        }
      ]
    },
    activityType: "video",
    completionRule: "video-ended"
  },

  {
    // ===== MODULE 2 | ORIENTATION =====
    id: "workspace",
    number: 2,
    title: "Setting Up Your CareerLink Workspace",
    type: "Video and checklist",
    label: "FIRST STEPS",
    description:
      "Learn which tools and tabs support the different tasks you may complete.",
    duration: "5 minutes",
    phase: "Orientation",
    available: true,
    lessonTitle: "Setting Up Your CareerLink Workspace",
    lessonDescription:
    "Learn which tools and tabs support the different tasks you may complete.",

    activityDetails: {
  videoMessage:
    "This video will explain the tools used for different CareerLink tasks.",

  accessibilityNote:
    "A written transcript and checklist will be available below the video.",

  checklistTitle: "Required tools",

  checklistDescription:
    "Keep the tools required for your current assignment available before you begin working.",

  checklistItems: [
    "Browser is open",
    "CareerLink is open",
    "CSUN Box is available",
    "Task-specific tools are ready"
  ],

  supportTitle: "Why this matters",

  supportText:
    "Preparing your workspace reduces interruptions and makes recurring tasks easier to complete accurately."
},
    activityType: "video-checklist",
    completionRule: "manual"    
  },

  {
    // ===== MODULE 3 | CAREERLINK FUNDAMENTALS =====
    id: "explore",
    number: 3,
    title: "Explore CareerLink",
    type: "Scavenger hunt",
    label: "EXPLORATION",
    description:
      "Find programs, departments, events, articles, resources, and taxonomy terms throughout CareerLink.",
    duration: "10-15 minutes",
    phase: "CareerLink Fundamentals",
    available: true,
    lessonTitle: "Explore CareerLink",
    lessonDescription:
    "Complete a guided scavenger hunt to find important pages, resources, and content throughout CareerLink.",

    activityDetails: {
  missionTitle: "Your mission",

  missionText:
    "Explore CareerLink and locate the areas listed below. You do not need to memorize everything. The goal is to learn where information lives.",

  completionTitle: "How to complete this activity",

  completionText:
    "Visit each location, make a note of what you found, and return here when you are ready for the quiz portion.",

  areasTitle: "Explore these CareerLink areas",

  areas: [
    "Find one academic program.",
    "Find one department page.",
    "Find one event listing.",
    "Find one CareerLink article.",
    "Find one external resource link.",
    "Find where taxonomy information is displayed."
  ],

  futureActivityNote:
    "The scored scavenger-hunt quiz will be added in a later stage."
},
    activityType: "scavenger-hunt",
    completionRule: "activity-complete"
  },
  {
    // ===== MODULE 4 | ORIENTATION =====
    id: "day-in-life",
    number: 4,
    title: "A Day in the Life of a CareerLink Assistant",
    type: "Timeline activity",
    label: "UNDERSTANDING YOUR ROLE",
    description:
      "Explore the daily, weekly, monthly, and special-request tasks that make up the role.",
    duration: "10 minutes",
    phase: "Orientation",
    available: true,
    lessonTitle: "A Day in the Life of a CareerLink Assistant",
    lessonDescription:
      "Learn how CareerLink tasks are organized and how assistants decide what to work on first.",
    
    activityDetails: {
  timelineTitle: "Your CareerLink work rhythm",

  timelineItems: [
    {
      label: "Daily",
      text:
        "Review assigned requests, check priorities, and complete current content updates."
    },
    {
      label: "Weekly",
      text:
        "Review unfinished work, confirm that requests are documented, and communicate questions or progress."
    },
    {
      label: "Monthly",
      text:
        "Work through recurring maintenance tasks such as reviewing broken-link reports."
    },
    {
      label: "Special requests",
      text:
        "Respond to approved requests involving events, academic programs, articles, or other CareerLink content."
    }
  ]
},
    activityType: "timeline",
    completionRule: "activity-complete"
  },
  {
    // ===== MODULE 5 | CONTENT WORKFLOWS =====
    id: "events",
    number: 5,
    title: "Events Tab",
    type: "Guided practice",
    label: "WHAT'S THE EVENT?",
    description:
    "Learn how to create and edit event listings while checking details before publishing.",
    duration: "10 minutes",
    phase: "Content Workflows",
    available: true,
    lessonTitle: "Working with the Events Tab",
    lessonDescription:
    "Learn how to create, edit, preview, and safely manage CareerLink event listings.",

    activityDetails: {
  overviewTitle: "What is the Events Tab?",

  overviewText:
    "The Events Tab helps CareerLink share workshops, fairs, appointments, information sessions, and other opportunities with students.",

  requirementsTitle: "What an event listing should include",

  requirements: [
    "A clear and accurate event title",
    "Date, time, and location information",
    "A useful description",
    "Registration or event links",
    "Accessible and relevant images, when needed"
  ],

  nextTitle: "What you will learn next",

  nextText:
    "You will later practice creating a sample event, previewing it, checking its accuracy, and confirming that it remains unpublished."
},
    activityType: "events-overview",
    completionRule: "manual",
  },

  {
    // ===== MODULE 6 | CONTENT WORKFLOWS =====
    id: "academic-overview",
    number: 6,
    title: "Academic Programs: Understanding the Structure",
    type: "Concept lesson",
    label: "ACADEMIC PROGRAMS",
    description:
      "Understand the purpose of academic program updates and what each part of a program means.",
    duration: "5 minutes",
    phase: "Content Workflows",
    available: true,
    lessonTitle: "Understanding Academic Programs",
    lessonDescription:
      "Explore the parts of an academic program and learn where the information comes from.",

    activityDetails: {
  overviewTitle: "What is an academic program update?",

  overviewText:
    "Academic program updates help keep CareerLink information aligned with the university's current program catalog. These updates allow students to find accurate descriptions of programs, departments, and related career information.",

  examineTitle: "What you will examine",

  examineItems: [
    "The name and type of an academic program",
    "The department connected to the program",
    "The program description",
    "Career-related information and resources",
    "The approved source used to verify the information"
  ],

  nextTitle: "What you will learn next",

  nextText:
    "You will later explore a real academic program and identify what each part of the program means before creating or updating one yourself."
},
    activityType: "interactive-example",
    completionRule: "manual"
  },

  {
    // ===== MODULE 7 | CONTENT WORKFLOWS =====
    id: "academic-builder",
    number: 7,
    title: "Academic Programs: Building a New Program",
    type: "Guided practice",
    label: "ACADEMIC PROGRAMS",
    description:
    "Practice gathering information, drafting a program, and preparing it for approval.",
    duration: "10 minutes",
    phase: "Content Workflows",
    available: true,
    lessonTitle: "Building a New Academic Program",
    lessonDescription:
    "Learn how to use approved sources to draft an academic program and prepare it for review.",
    activityDetails: {
  overviewTitle: "Building a new academic program",

  overviewText:
    "Creating an academic program requires careful research, accurate information, and clear organization. The goal is to build a useful draft using approved university sources.",

  preparationTitle: "Before you begin",

  preparationItems: [
    "Locate the official academic program catalog.",
    "Confirm the program's current name and department.",
    "Review the approved program description.",
    "Gather relevant career information and resources.",
    "Understand which fields require approval before publishing."
  ],

  approvalTitle: "Important approval rule",

  approvalText:
    "Student assistants may prepare and organize a draft, but the program should be reviewed by the appropriate staff member before it is published on CareerLink.",

  practiceTitle: "What you will practice later",

  practiceText:
    "You will build a draft for an actual academic program, compare it with approved sources, complete a quality checklist, and submit it for review."
},
    activityType: "academic-builder",
    completionRule: "approval-required"
  },
  {
    // ===== MODULE 8 | CAREERLINK FUNDAMENTALS =====
    id: "taxonomy",
    number: 8,
    title: "Understanding CareerLink Taxonomy",
    type: "Matching activity",
    label: "LEARN CAREERLINK ORGANIZATION",
    description:
      "Learn why taxonomy matters and practice connecting resources to the right categories.",
    duration: "5 minutes",
    phase: "CareerLink Fundamentals",
    available: true,
    lessonTitle: "Understanding CareerLink Taxonomy",
    lessonDescription:
      "Learn how taxonomy helps organize CareerLink content and connect students to relevant resources.",
    
    activityDetails: {
  overviewTitle: "What is CareerLink taxonomy?",

  overviewText:
    "Taxonomy is the system CareerLink uses to organize content into meaningful categories. It helps students find related programs, articles, and resources more easily.",

  importanceTitle: "Why taxonomy matters",

  importanceItems: [
    "It keeps related content connected.",
    "It improves navigation and discoverability.",
    "It helps prevent resources from being misplaced.",
    "It creates consistency across CareerLink pages."
  ],

  examineTitle: "What you will examine",

  examineText:
    "You will later review examples of CareerLink content and identify which taxonomy terms or categories best match each item.",

  exampleTitle: "Example resource",

  exampleText:
    "A resume-writing workshop should be connected to categories related to career preparation and student support.",

  questionTitle: "Key question",

  questionText:
    "Ask: “Which category would help a student find this resource?”"
},
    activityType: "matching",
    completionRule: "activity-complete"
  },
  {
    // ===== MODULE 9 | CAREERLINK FUNDAMENTALS =====
    id: "articles",
    number: 9,
    title: "CareerLink Articles",
    type: "Practice activity",
    label: "BUILDING RESOURCES",
    description:
      "Learn how to update existing articles, create new ones, and connect external resources.",
    duration: "15 minutes",
    phase: "CareerLink Fundamentals",
    available: true,
    lessonTitle: "Working with CareerLink Articles",
    lessonDescription:
      "Practice updating article content, formatting pages, and linking external resources appropriately.",

    activityDetails: {
  overviewTitle: "Working with CareerLink articles",

  overviewText:
    "Articles are one of the main ways CareerLink stores useful information, explains services, and connects students with external resources.",

  tasksTitle: "Common article tasks",

  tasks: [
    "Review and update an existing article.",
    "Create a new article when an approved resource needs to be added.",
    "Write a clear and useful title.",
    "Format content so it is easy to scan.",
    "Add and test external links.",
    "Review the page before it is published."
  ],

  beforeTitle: "Before creating a new article",

  beforeText:
    "First determine whether the information belongs in an existing article. Creating duplicate pages can make CareerLink harder to maintain and harder for students to navigate.",

  qualityTitle: "Good article content",

  qualityText:
    "Clear, accurate, current, relevant to students, and connected to an appropriate category.",

  reviewTitle: "Review before publishing",

  reviewText:
    "Check the title, formatting, links, source information, accessibility, and page placement.",

  practiceNote:
    "You will revise a sample article and decide whether it should be updated or replaced with a new page."
},
    activityType: "article-practice",
    completionRule: "activity-complete"
  },
  {
    // ===== MODULE 10 | MAINTENANCE =====
    id: "broken-links",
    number: 10,
    title: "Fixing Broken Links",
    type: "Detective challenge",
    label: "PROBLEM WITH RESOURCES",
    description:
      "Learn how to investigate broken links, update pages, document your work, and escalate issues.",
    duration: "15 minutes",
    phase: "Maintenance",
    available: true,
    lessonTitle: "Fixing Broken Links",
    lessonDescription:
      "Learn how to review broken-link reports, investigate problems, update links, and document the results.",

    activityDetails: {
  overviewTitle: "What is broken-link maintenance?",

  overviewText:
    "Broken-link maintenance involves reviewing links on CareerLink, determining what caused a link to fail, and deciding whether the link should be repaired, replaced, removed, or escalated.",

  workflowTitle: "The basic workflow",

  workflowSteps: [
    "Review the broken-link report.",
    "Locate the affected CareerLink page.",
    "Investigate the link and determine what happened.",
    "Find an approved replacement when necessary.",
    "Update or remove the link.",
    "Document the completed work."
  ],

  solutionsTitle: "Not every broken link has the same solution",

  solutions: [
    "A temporary outage may need to be monitored.",
    "A redirected page may need to be updated.",
    "A permanently removed page may need a replacement.",
    "A suspicious link should be escalated before being opened."
  ],

  toolsTitle: "Tools you may use",

  toolsText:
    "Broken-link reports, Screaming Frog, a web browser, approved source pages, and CSUN Box documentation.",

  practiceTitle: "What you will practice later",

  practiceText:
    "You will review sample report entries, classify each problem, choose the appropriate action, and document the result."
},
    activityType: "detective-challenge",
    completionRule: "activity-complete"
  }
];