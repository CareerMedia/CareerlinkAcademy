const modules = [
  {
    id: "welcome",
    number: 1,
    title: "Welcome to CareerLink",
    type: "Welcome video",
    label: "HELLO MATADOR!",
    description:
      "Learn what CareerLink is, how your role supports the Career Center, and what to expect as a Program Assistant.",
    duration: "5 minutes",
    phase: "Orientation",
    lessonTitle: "Welcome to CareerLink",
    lessonDescription:
    "Start here to learn what CareerLink is, how your role supports the Career Center, and what you can expect as a Program Assistant.",
    activityType: "video",
    completionRule: "video-ended"
  },

  {
    id: "workspace",
    number: 2,
    title: "Setting Up Your CareerLink Workspace",
    type: "Video and checklist",
    label: "FIRST STEPS",
    description:
      "Learn which tools and tabs support the different tasks you may complete.",
    duration: "5 minutes",
    phase: "Orientation",
    lessonTitle: "Setting Up Your CareerLink Workspace",
    lessonDescription:
    "Learn which tools and tabs support the different tasks you may complete.",
    activityType: "video-checklist",
    completionRule: "manual"    
  },

  {
    id: "explore",
    number: 3,
    title: "Explore CareerLink",
    type: "Scavenger hunt",
    label: "EXPLORATION",
    description:
      "Find programs, departments, events, articles, resources, and taxonomy terms throughout CareerLink.",
    duration: "10-15 minutes",
    phase: "CareerLink Fundamentals",
    lessonTitle: "Explore CareerLink",
    lessonDescription:
    "Complete a guided scavenger hunt to find important pages, resources, and content throughout CareerLink.",
    activityType: "scavenger-hunt",
    completionRule: "activity-complete"
  },
  {
    id: "day-in-life",
    number: 4,
    title: "A Day in the Life of a CareerLink Assistant",
    type: "Timeline activity",
    label: "UNDERSTANDING YOUR ROLE",
    description:
      "Explore the daily, weekly, monthly, and special-request tasks that make up the role.",
    duration: "10 minutes",
    phase: "Orientation",
    lessonTitle: "A Day in the Life of a CareerLink Assistant",
    lessonDescription:
      "Learn how CareerLink tasks are organized and how assistants decide what to work on first.",
    activityType: "timeline",
    completionRule: "activity-complete"
  },
  {
    id: "events",
    number: 5,
    title: "Events Tab",
    type: "Guided practice",
    label: "WHAT'S THE EVENT?",
    description:
    "Learn how to create and edit event listings while checking details before publishing.",
    duration: "10 minutes",
    phase: "Content Workflows",
    lessonTitle: "Working with the Events Tab",
    lessonDescription:
    "Learn how to create, edit, preview, and safely manage CareerLink event listings.",
    activityType: "events-overview",
    completionRule: "manual",
  },

  {
    id: "academic-overview",
    number: 6,
    title: "Academic Programs: Understanding the Structure",
    type: "Concept lesson",
    label: "ACADEMIC PROGRAMS",
    description:
      "Understand the purpose of academic program updates and what each part of a program means.",
    duration: "5 minutes",
    phase: "Content Workflows",
    lessonTitle: "Understanding Academic Programs",
    lessonDescription:
      "Explore the parts of an academic program and learn where the information comes from.",
    activityType: "interactive-example",
    completionRule: "manual"
  },

  {
    id: "academic-builder",
    number: 7,
    title: "Academic Programs: Building a New Program",
    type: "Guided practice",
    label: "ACADEMIC PROGRAMS",
    description:
    "Practice gathering information, drafting a program, and preparing it for approval.",
    duration: "10 minutes",
    phase: "Content Workflows",
    lessonTitle: "Building a New Academic Program",
    lessonDescription:
    "Learn how to use approved sources to draft an academic program and prepare it for review.",
    activityType: "academic-builder",
    completionRule: "approval-required"
  },

  {
    id: "taxonomy",
    number: 8,
    title: "Understanding CareerLink Taxonomy",
    type: "Matching activity",
    label: "LEARN CAREERLINK ORGANIZATION",
    description:
      "Learn why taxonomy matters and practice connecting resources to the right categories.",
    duration: "5 minutes",
    phase: "CareerLink Fundamentals",
    lessonTitle: "Understanding CareerLink Taxonomy",
    lessonDescription:
      "Learn how taxonomy helps organize CareerLink content and connect students to relevant resources.",
    activityType: "matching",
    completionRule: "activity-complete"
  },

  {
    id: "articles",
    number: 9,
    title: "CareerLink Articles",
    type: "Practice activity",
    label: "BUILDING RESOURCES",
    description:
      "Learn how to update existing articles, create new ones, and connect external resources.",
    duration: "15 minutes",
    phase: "CareerLink Fundamentals",
    lessonTitle: "Working with CareerLink Articles",
    lessonDescription:
      "Practice updating article content, formatting pages, and linking external resources appropriately.",
    activityType: "article-practice",
    completionRule: "activity-complete"
  },

  {
    id: "broken-links",
    number: 10,
    title: "Fixing Broken Links",
    type: "Detective challenge",
    label: "PROBLEM WITH RESOURCES",
    description:
      "Learn how to investigate broken links, update pages, document your work, and escalate issues.",
    duration: "15 minutes",
    phase: "Maintenance",
    lessonTitle: "Fixing Broken Links",
    lessonDescription:
      "Learn how to review broken-link reports, investigate problems, update links, and document the results.",
    activityType: "detective-challenge",
    completionRule: "activity-complete"
  }
];