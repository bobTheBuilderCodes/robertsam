export const disciplines = {
  "UX Designer": {
    eyebrow: "STRUCTURE / STORY / SYSTEMS",
    text: "I turn fuzzy problems into clear, useful product experiences.",
    color: "orange",
  },
  "Full-stack Dev": {
    eyebrow: "INTERFACE / LOGIC / SCALE",
    text: "I build the connective tissue that makes digital products work.",
    color: "blue",
  },
  "Project Manager": {
    eyebrow: "PEOPLE / PLANNING / DELIVERY",
    text: "I move good ideas from conversation to a thing people can use.",
    color: "green",
  },
  "Data Engineer": {
    eyebrow: "RAW / RELIABLE / USEFUL",
    text: "I am learning how raw information becomes a source of better decisions.",
    color: "purple",
  },
};

export const projects = [
  {
    number: "01",
    category: "UX AUDIT / MOBILE",
    name: "EApp",
    desc: "An ongoing UX audit and redesign exploration for native iOS and Android.",
    type: "coral",
    tags: ["UX audit", "iOS", "Android"],
    kind: "audit",
    status: "Currently in progress",
  },
  {
    number: "02",
    category: "PRODUCT DESIGN / PRODUCT OWNERSHIP",
    name: "Contract & Invoice Platform",
    desc: "An enterprise workflow system for contracts, resources and invoicing.",
    type: "ochre",
    tags: ["Enterprise", "Workflow automation", "Product ownership"],
    kind: "workflow",
    status: "Completed",
  },
  {
    number: "03",
    category: "PRODUCT DESIGN / ENTERPRISE UX",
    name: "ICON",
    desc: "An ERP platform for a German institute, designed around scalable enterprise systems.",
    type: "lime",
    tags: ["Enterprise", "Atomic design", "Design systems"],
    kind: "design-system",
    status: "Completed",
  },
  {
    number: "04",
    category: "PRODUCT DESIGN / MOBILE UX",
    name: "CaptiVR",
    desc: "A 360-video recording solution with intuitive mobile workflows.",
    type: "lavender",
    tags: ["Mobile UX", "Prototyping", "Development"],
    kind: "mobile",
    status: "Completed",
  },
  {
    number: "05",
    category: "PRODUCT DESIGN / PRODUCT MANAGEMENT",
    name: "ALS",
    desc: "A learning management platform designed to equip employees with their professional development and career growth.",
    type: "cyan",
    tags: ["LMS", "Product management", "Development"],
    kind: "roadmap",
    status: "Completed",
  },
  {
    number: "06",
    category: "PRODUCT DESIGN / DATA VISUALIZATION",
    name: "PMMT",
    desc: "A productivity monitoring tool that turns performance data into clearer action.",
    type: "purple",
    tags: ["Dashboard", "Data visualization", "Analytics"],
    kind: "dashboard",
    status: "Completed",
  },
];

export const caseStudyContent = {
  workflow: {
    title: "From billing friction to connected workflows.",
    summary:
      "The Contracts & Invoice Management System (CMS/IMS) is an enterprise platform designed to streamline the journey from client and contract management through staffing, service delivery, and invoicing. It connects the dependencies that make contract-to-cash work while keeping complex workflows understandable for users.",
    contribution:
      "Led end-to-end product design, transitioned into Product Owner responsibilities, owned requirements, prioritized the backlog, planned UAT and coordinated delivery.",
    focus: [
      "Business processes",
      "Stakeholder alignment",
      "Automation",
      "Product ownership",
    ],
    goals: [
      "Centralize contract and invoice management.",
      "Establish a reliable source of truth for contractual and billing information.",
      "Automate invoice generation wherever possible.",
      "Reduce manual calculations and data duplication.",
      "Improve billing accuracy through integrations with RMS and ClockIt.",
      "Support multi-entity and multi-currency operations.",
      "Improve traceability through audit history and document relationships.",
      "Create scalable foundations for future automation and integrations.",
      "Simplify complex enterprise workflows for Finance and Operations users.",
      "Provide clear feedback, error handling and transparency around system-generated information.",
    ],
    research: [
      "Conducted stakeholder interviews and requirement workshops.",
      "Mapped existing contract-to-invoice workflows.",
      "Identified dependencies between CMS, RMS, ClockIt and IMS.",
      "Investigated billing calculations and business rules.",
      "Analysed edge cases around currencies, taxes, staffing, commissions and invoice adjustments.",
      "Worked with technical teams to understand API and integration constraints.",
      "Validated workflows through UAT planning and stakeholder testing.",
      "Established that invoice generation could not be treated as an isolated Finance workflow.",
    ],
    designProcess: [
      "Mapped user journeys and the contract-to-invoice workflow.",
      "Defined information architecture for CMS and IMS.",
      "Translated complex business logic into wireframes and high-fidelity UI.",
      "Designed interaction patterns for forms, tables, permissions and responsive enterprise interfaces.",
      "Created reusable design-system components and clear empty, loading and error states.",
      "Prototyped and validated workflows with stakeholders.",
      "Clarified requirements, business rules and acceptance criteria as Product Owner.",
      "Refined the backlog, coordinated UAT and prepared releases for delivery.",
    ],
    impact: [
      "Connected contract-to-invoice workflow: Contract information became the foundation for downstream billing, reducing manually re-entered information.",
      "Automated billing calculations: Contracted billing information, RMS staffing data and ClockIt worked hours can determine invoice quantities.",
      "Multi-entity support: Different entities, currencies, tax rules and revenue-sharing configurations can coexist within one system.",
      "Reduced manual effort: Automation was introduced across recurring invoices, tax configuration, currency selection, RMS notifications, SharedDrive uploads and billing calculations.",
      "Improved financial accuracy: Billing logic, rate cards, tax configuration and revenue commission rules were formalized in the product.",
      "Better traceability: Contracts, invoices, credit notes and related documents can be connected through audit trails.",
      "Scalable product foundation: The platform supports further integrations and automation, including exploration of QuickBooks integration.",
    ],
    sections: [
      [
        "problem",
        "The problem",
        "The existing processes involved multiple teams and systems, creating significant complexity across the contract-to-invoice lifecycle. A single client invoice could depend on Contract → Project → Rate Card → Staffing → Clocked Hours → Billing Rules → Tax → Commission → Invoice.",
      ],
      ["research", "Workflow analysis", "Worked closely with stakeholders across Finance, Operations, RMS, Engineering and business teams to understand how contracts, staffing, service delivery and invoicing worked in practice."],
      [
        "strategy",
        "Product strategy",
        "The opportunity was to connect contract creation, validation, resource management and invoicing into a clearer, scalable contract-to-cash workflow.",
      ],
      ["ux", "Future-state workflow", "Contractual terms → staffing allocation → actual work → billing rules → invoice."],
      [
        "build",
        "Automation & delivery",
        "Worked across requirements, backlog prioritization, UAT planning and stakeholder coordination.",
      ],
      ["outcome", "Outcome", "Established a connected contract-to-invoice workflow that replaces fragmented processes with a centralized platform."],
      [
        "snapshots",
        "Design snapshots",
        "UI designs and Figma explorations for this project.",
      ],
      [
        "learning",
        "Lessons learned",
        "Good enterprise UX requires understanding the business process behind every screen.",
      ],
    ],
  },
  roadmap: {
    title: "A learning platform shaped by feedback.",
    summary:
      "The AmaliTech Learning Management System (LMS) was designed to provide a centralized digital learning experience for employees and learners, bringing training, learning content, progress tracking and learning administration into a single platform. I worked across the project as both Product Owner and Lead Product Designer, combining product strategy, requirements definition, stakeholder management, UX strategy and end-to-end product design.",
    contribution:
      "Led development and optimization, participated in requirements gathering, prioritized features from user feedback and helped shape the product roadmap.",
    focus: ["User needs", "Requirements", "Prioritization", "Development"],
    goals: [
      "Create a centralized learning platform.",
      "Simplify course discovery and access.",
      "Provide a clear learning journey and improve visibility of learning progress.",
      "Support structured learning programs and an intuitive administration experience.",
      "Establish a scalable UX foundation for future learning capabilities.",
      "Align product requirements, business objectives and user needs.",
    ],
    research: [
      "Held stakeholder discussions and gathered requirements.",
      "Understood existing learning workflows.",
      "Identified learner and administrator needs.",
      "Mapped key learning journeys and defined information architecture.",
      "Identified functional and UX gaps.",
      "Prioritized requirements based on business and user value.",
      "Translated requirements into user stories and acceptance criteria.",
    ],
    designProcess: [
      "Defined product information architecture and learner journeys.",
      "Designed course discovery, navigation and content experiences.",
      "Created learning dashboards, progress states and completion flows.",
      "Designed forms, data tables and administrative workflows.",
      "Created responsive layouts, interaction patterns and reusable components.",
      "Produced high-fidelity UI designs and prototypes.",
      "Defined and prioritized the backlog with engineering and stakeholders.",
      "Supported UAT, reviewed delivered functionality and prioritized improvements.",
    ],
    impact: [
      "Established a centralized foundation for digital learning within AmaliTech.",
      "Brought learning content, training, progress tracking and administration into one platform.",
      "Created a clearer learning experience for employees, learners and administrators.",
      "Connected product strategy and design decisions to actionable product work.",
      "Improved the foundation for future learning capabilities and scalable delivery.",
    ],
    sections: [
      [
        "problem",
        "The Challenge",
        "Learning activities and training resources can become fragmented when learners have to navigate multiple tools, processes or sources of information. The platform needed to make it easy to discover relevant learning opportunities, access content, understand progress, complete assigned courses, track learning activities and manage learning programs, while giving administrators appropriate control and visibility.",
      ],
      [
        "research",
        "Research & feedback",
        "User feedback informed roadmap decisions and helped identify key pain points for new features.",
      ],
      ["strategy", "Product roadmap", "[ADD ROADMAP DETAILS]"],
      [
        "ux",
        "Feature experience",
        "Translated requirements and user needs into flows, interfaces and prioritized features.",
      ],
      [
        "build",
        "Implementation",
        "Worked through feature implementation and optimization alongside the product and engineering process.",
      ],
      ["outcome", "Product outcomes", "[ADD OUTCOME] / [ADD METRICS]"],
      [
        "snapshots",
        "Design snapshots",
        "UI designs and Figma explorations for this project.",
      ],
      [
        "learning",
        "Lessons learned",
        "The strongest product decisions connect user feedback to a clear delivery priority.",
      ],
    ],
  },
  "design-system": {
    title: "One connected system for a complex business.",
    summary:
      "ICON Project is an enterprise ERP platform designed to centralize and manage the core business activities of a German company. It connects employee and expert management, projects, budgets, missions, time and expenses, financial controlling, accounting and reporting within one ecosystem.",
    contribution:
      "As Product Designer and Lead Product Designer, I transformed complex business requirements and interconnected workflows into clear, scalable and intuitive enterprise experiences.",
    focus: [
      "Enterprise UX",
      "Requirements gathering",
      "Atomic design",
      "Usability testing",
    ],
    goals: [
      "Centralize core business operations within one platform.",
      "Improve visibility across employees, experts, projects and finances.",
      "Connect information between different business functions.",
      "Simplify project and resource management.",
      "Improve management of internal employees and external experts.",
      "Support project budgeting and financial control.",
      "Digitize invoice, receipt and accounting processes.",
      "Reduce manual administrative processes.",
      "Provide reliable reporting and analytics.",
      "Establish a scalable foundation for future business operations.",
    ],
    research: [
      "Explored user roles and responsibilities across the organization.",
      "Mapped existing business workflows and employee management processes.",
      "Investigated expert, partner, project and client contract relationships.",
      "Mapped budgeting, cost management and mission planning workflows.",
      "Studied time, expense, invoice, receipt, accounting and reporting requirements.",
      "Documented relationships and dependencies between modules.",
      "Traced how expert skills and availability influence staffing, projects, missions, expenses and financial reporting.",
    ],
    designProcess: [
      "Structured the information architecture around Administration → Employees → Experts & Partners → Projects → Controlling → Accounting → Reporting.",
      "Mapped end-to-end journeys across modules, including Project Creation → Client Contract → Budget → Personnel Allocation → Mission → Time & Expense → Controlling → Accounting → Reporting.",
      "Designed employee profiles, time management, expert availability and skills experiences.",
      "Designed project creation, client contracts, budgets, personnel allocation and mission management.",
      "Designed time and expense reporting, invoice and receipt management, local office budgets, accounting and reports.",
      "Applied information hierarchy, tables, filtering, forms, navigation, dashboards and clear status communication.",
      "Connected related information across modules so users could understand projects, personnel, experts, missions, budgets and expenses without reconstructing the relationships manually.",
    ],
    impact: [
      "Centralized a broad range of organizational activities into one enterprise management ecosystem.",
      "Connected people, experts, projects, resources, missions, expenses, finance, accounting and reporting.",
      "Created a shared foundation for users to work within their responsibilities while benefiting from connected organizational information.",
      "Improved the experience of navigating complex information architecture, multiple user roles, interdependent workflows and large datasets.",
      "Established a scalable enterprise experience for project management, resource management, financial systems, data and analytics.",
    ],
    sections: [
      [
        "problem",
        "The enterprise context",
        "The organization manages activities involving internal employees and external experts while also managing projects, client contracts, budgets, missions, expenses, invoices and accounting. The challenge was to create a unified platform that made these interconnected processes understandable for HR, project management, finance and leadership users.",
      ],
      [
        "research",
        "Research & requirements",
        "Discovery focused on user roles, business workflows and the relationships between employees, experts, projects, budgets, missions, time, expenses, invoices, accounting and reporting.",
      ],
      ["strategy", "Research findings", "[ADD RESEARCH FINDINGS]"],
      ["ux", "UX challenges", "[ADD UX CHALLENGES]"],
      [
        "ui",
        "Atomic design system",
        "Atoms → Molecules → Organisms → Templates → Pages",
      ],
      [
        "build",
        "Iterations",
        "Worked iteratively with client feedback and usability testing to improve the product.",
      ],
      ["outcome", "Impact", "[ADD OUTCOME] / [ADD METRICS]"],
      [
        "snapshots",
        "Design snapshots",
        "UI designs and Figma explorations for this project.",
      ],
      [
        "learning",
        "Lessons learned",
        "A design system becomes valuable when it supports both consistency and change.",
      ],
    ],
  },
  dashboard: {
    title: "Turning productivity data into action.",
    summary:
      "The Productivity Monitoring Management Tool (PMMT) is an internal enterprise platform designed to help organizations understand and monitor the productivity of internal teams. It provides management with visibility into team activity, productivity patterns, performance indicators and operational trends so they can make informed decisions around workload, performance, resource allocation and team management.",
    contribution:
      "As Product Designer, I designed PMMT into a data-driven productivity intelligence platform, transforming complex internal workforce activity and performance data into clear, actionable insights for managers.",
    focus: [
      "Metrics",
      "Data visualization",
      "Task management",
      "Performance analytics",
    ],
    goals: [
      "Centralize productivity information.",
      "Give managers visibility into team performance and make productivity trends easy to understand.",
      "Reduce reliance on manually compiled reports.",
      "Help identify productivity patterns and potential issues.",
      "Enable drill-down from organization and team insights to relevant details.",
      "Provide role-based access to sensitive information.",
      "Create a scalable foundation for productivity analytics.",
    ],
    research: [
      "Understood existing productivity measurement processes.",
      "Identified key productivity indicators and mapped manager workflows.",
      "Defined different user roles and access levels.",
      "Distinguished activity data from meaningful productivity.",
      "Mapped reporting and monitoring requirements.",
      "Identified opportunities to automate manual processes.",
      "Designed an information hierarchy so managers could move from awareness to investigation without being overwhelmed by raw data.",
    ],
    designProcess: [
      "Structured the information architecture around Organization → Team → Individual → Activity / Productivity Details.",
      "Designed dashboard experiences around the questions managers need to answer: how are we doing, which teams need attention, what is driving the change, and what requires investigation.",
      "Selected visualizations that make comparisons, trends and deviations easy to understand.",
      "Designed filtering, segmentation, search, tables, reporting and date-based analysis.",
      "Created detail views, empty states, loading states, error states and role-based experiences.",
      "Designed responsive layouts, interaction patterns, high-fidelity UI and prototypes.",
      "Applied privacy and access principles to navigation, dashboard content, detail views and data presentation.",
    ],
    impact: [
      "Created a centralized experience for understanding internal productivity and team performance.",
      "Transformed fragmented productivity reporting into a structured digital experience for decision support.",
      "Enabled managers to move from awareness to understanding, investigation and action.",
      "Made complex workforce data clearer through contextual visualizations and information hierarchy.",
      "Established a scalable foundation for productivity analytics and role-appropriate access.",
    ],
    sections: [
      [
        "problem",
        "The Challenge",
        "Monitoring productivity across internal teams can quickly become a data-heavy problem. Managers need visibility into performance without being overwhelmed by raw activity data, while employees and teams need to be represented fairly with productivity metrics presented in the appropriate context. The key design challenge was: How do we transform large amounts of employee and team activity data into meaningful insights that managers can use to make decisions? The product needed to balance data visibility, ease of interpretation, performance monitoring, team-level insights, individual-level information, reporting, privacy and appropriate access, and actionable decision-making.",
      ],
      [
        "research",
        "Users & stakeholders",
        "[ADD USER AND STAKEHOLDER DETAILS]",
      ],
      [
        "strategy",
        "Dashboard strategy",
        "Raw productivity data → Data visualization → Information → Insight → Action",
      ],
      [
        "ux",
        "Task & time workflows",
        "Streamlined task management and time-tracking workflows to improve visibility.",
      ],
      ["ui", "Visualization decisions", "[ADD VISUALIZATION RATIONALE]"],
      [
        "build",
        "Interaction design",
        "Designed KPI cards, progress indicators, charts and performance views around the questions users need to answer.",
      ],
      ["outcome", "Outcome", "[ADD OUTCOME] / [ADD METRICS]"],
      [
        "snapshots",
        "Design snapshots",
        "UI designs and Figma explorations for this project.",
      ],
      [
        "learning",
        "Lessons learned",
        "Data becomes useful when the interface makes the next decision easier.",
      ],
    ],
  },
  mobile: {
    title: "Making 360-video feel intuitive.",
    summary:
      "CaptiVR is a 360° video recording experience designed for users riding roller coasters. The concept combines immersive video capture with amusement-park experiences, allowing riders to capture their experience from a 360° perspective and revisit the ride afterward.",
    contribution:
      "Designed mobile interfaces, created user flows and prototypes, collaborated with clients, validated journeys and implemented responsive UI with JavaScript, CSS and customized Material UI components.",
    focus: ["Mobile UX", "User flows", "Design-to-code", "Material UI"],
    goals: [
      "Make recording a ride experience simple.",
      "Minimize interaction required during the ride.",
      "Clearly communicate recording status and build trust that the experience was captured.",
      "Make captured 360° content easy to access and understand afterward.",
      "Create an engaging post-ride experience for discovery, playback and sharing.",
      "Establish a scalable foundation for future CaptiVR experiences.",
    ],
    research: [
      "Considered the complete journey: Before the ride → Prepare → Ride → Capture → Finish → Relive → Share.",
      "Accounted for riders moving at high speed and experiencing strong physical sensations.",
      "Recognized that users have limited attention and may be unable to interact with their phone during the ride.",
      "Identified the need for confidence before the ride, minimal interaction during it and discovery after it.",
      "Explored how users unfamiliar with 360° video understand and navigate immersive content.",
    ],
    designProcess: [
      "Mapped the physical ride journey and the digital experience around it.",
      "Designed user journeys, information architecture and mobile interaction patterns.",
      "Reduced interaction progressively as the user gets closer to the ride.",
      "Designed recording states, status feedback and post-ride content management.",
      "Designed the 360° video viewing model and explained how users explore immersive content.",
      "Created navigation, empty states, loading states and error handling.",
      "Produced high-fidelity UI, prototypes and reusable design-system components.",
      "Validated the interaction direction through prototyping and client collaboration.",
    ],
    impact: [
      "Created a mobile experience that fits naturally around a high-intensity physical ride.",
      "Reduced cognitive load by making recording simple and interaction-light during the ride.",
      "Connected capture, playback, discovery and sharing into one coherent post-ride experience.",
      "Established interaction patterns for helping users understand and explore 360° video.",
      "Strengthened experience designing products where the physical environment shapes digital behavior.",
    ],
    sections: [
      [
        "problem",
        "The challenge",
        "The experience needed to make complex 360-video functionality easier to use.",
      ],
      ["research", "Understanding the user", "[ADD RESEARCH DETAILS]"],
      [
        "strategy",
        "User flows",
        "Mapped and refined end-to-end journeys before moving into interactive prototypes.",
      ],
      [
        "ux",
        "Prototype & validation",
        "Validated and optimized user journeys through interactive prototypes and client collaboration.",
      ],
      [
        "ui",
        "Visual design",
        "Created intuitive mobile interfaces and customized Material UI components to match the design direction.",
      ],
      [
        "build",
        "Responsive implementation",
        "Implemented responsive UI using JavaScript and CSS.",
      ],
      ["outcome", "Outcome", "[ADD OUTCOME] / [ADD METRICS]"],
      [
        "snapshots",
        "Design snapshots",
        "UI designs and Figma explorations for this project.",
      ],
      [
        "learning",
        "Lessons learned",
        "Design-to-code works best when interaction intent is clear before implementation begins.",
      ],
    ],
  },
  audit: {
    title: "A clearer mobile front door for HR services.",
    summary:
      "EmployeeApp is an employee-facing mobile platform that centralizes HR services and workplace processes into a single secure system.",
    contribution:
      "Redesigned legacy interfaces to align with Material Design 3 for Android and the Human Interface Guidelines for iOS, while creating a more consistent foundation for cross-functional delivery.",
    focus: [
      "Employee experience",
      "Material Design 3",
      "Human Interface Guidelines",
      "Cross-platform consistency",
    ],
    goals: [
      "Redesigning legacy interfaces to align with Material 3 Design (Android) and Human Interface Guidelines (iOS).",
      "Designing and refining user flows for various HR-related features.",
      "Creating and maintaining iconography used across the application.",
      "Supporting visual clarity through illustration where required.",
    ],
    research: [
      "Inconsistency in how patterns are applied across features.",
      "Lack of standardized flow from design to implementation.",
      "One design language for both Android and iOS.",
    ],
    designProcess: [
      "Identify a feature requiring redesign (legacy screen).",
      "Review the existing old interface.",
      "Reference similar patterns in the new UI.",
      "Translate the design into the updated interface style.",
      "Apply improvements where necessary across layout, clarity and usability.",
      "Share the work for feedback through meetings or communication tools.",
      "Iterate based on feedback.",
      "Prepare the work for development handoff.",
    ],
    impact: [
      "Cross-Platform Design Refresh: Redesigned the EApp experience for both Android and iOS, aligning Android interfaces with Material Design 3 and iOS experiences with Apple's Human Interface Guidelines (HIG).",
      "Accessibility & Inclusive Design: Improved accessibility standards across the app by applying inclusive design principles to create an experience that is usable and accessible to a wider range of users.",
      "Enhanced User Experience: Improved the overall UX across key features, screens, components, and widgets, creating more intuitive navigation, clearer interactions, and a more consistent experience.",
      "Design Consistency: Established a more cohesive visual and interaction language across platforms, helping users interact with the app more confidently and predictably.",
      "Platform-Specific Experiences: Balanced consistency with platform conventions, ensuring the app feels native and familiar to both Android and iOS users.",
    ],
    sections: [
      [
        "problem",
        "The Challenge",
        "The project operates within a complex cross-functional environment involving product, development, HR, and support stakeholders. While core functionality is defined, several structural and process-related gaps impact design efficiency, consistency, and implementation quality.",
      ],
      [
        "research",
        "Research and Discovery",
        "Analyzing the existing experience and evaluating usability issues across the native mobile application.",
      ],
      [
        "strategy",
        "Design principles",
        [
          "Understand the employee, the context and the real task before changing the interface.",
          "Simplify complex HR services into clear, calm and useful mobile journeys.",
        ],
      ],
      [
        "ux",
        "Interaction direction",
        [
          "Turn good thinking into flows employees can understand and complete with confidence.",
          "Use platform conventions to make familiar actions feel natural on both Android and iOS.",
        ],
      ],
      [
        "ui",
        "Platform-aligned visual design",
        [
          "Redesign legacy interfaces using Material Design 3 for Android.",
          "Apply Human Interface Guidelines patterns for iOS.",
          "Create a consistent visual language without erasing platform-specific expectations.",
        ],
      ],
      [
        "future-workflow",
        "Future-state workflow",
        [
          "Employee need → clear task flow → platform-aligned interface → feedback → iteration.",
          "Connect product, development, HR and support feedback into a shared design direction.",
        ],
      ],
      [
        "build",
        "Implementation direction",
        [
          "Create reusable patterns that can be understood by product and development teams.",
          "Document decisions clearly enough to support consistent implementation across platforms.",
        ],
      ],
      [
        "automation-delivery",
        "Collaboration and delivery",
        [
          "Work with product, development, HR and support stakeholders throughout the redesign.",
          "Use feedback and review cycles to improve consistency before implementation.",
        ],
      ],
      [
        "solution",
        "Final Solution",
        [
          "A unified mobile interface for accessing HR services, organizational resources and internal processes.",
          "A redesigned experience aligned with Material Design 3 on Android and Human Interface Guidelines on iOS.",
          "A clearer design foundation for cross-functional teams to use and extend.",
        ],
      ],
      [
        "outcome",
        "Impact and Solutions",
        [
          "Improved alignment between the employee experience and approved platform design guidelines.",
          "Created clearer design direction for product and development collaboration.",
          "Established a more consistent foundation for future HR service improvements.",
        ],
      ],
      [
        "lessons",
        "Lessons learned",
        [
          "Legacy redesigns are strongest when platform guidance and real user context shape decisions together.",
          "Cross-functional alignment is essential when one experience must work across Android and iOS.",
        ],
      ],
      [
        "status",
        "Current status",
        "The redesign is in progress and continuing through review and refinement.",
      ],
      [
        "snapshots",
        "Design snapshots",
        "UI designs and Figma explorations for EmployeeApp.",
      ],
    ],
  },
  snapshots: {
    title: "A visual archive of ideas in motion.",
    summary:
      "Selected interface explorations and design-system studies created in Figma.",
    contribution:
      "A curated collection of visual explorations. Replace the sample frames with exported Figma designs as the archive grows.",
    focus: ["Figma", "UI design", "Design systems", "Interaction studies"],
    sections: [
      [
        "overview",
        "About these snapshots",
        "A collection of design explorations showing how visual ideas, interaction patterns and systems take shape.",
      ],
      [
        "research",
        "The question behind the frame",
        "[ADD CONTEXT FOR EACH FIGMA SNAPSHOT]",
      ],
      ["strategy", "Design direction", "[ADD DESIGN RATIONALE]"],
      ["ux", "Flows & interactions", "[ADD FLOW OR PROTOTYPE DETAILS]"],
      [
        "ui",
        "Visual system",
        "Typography, color, components and layout studies are explored as connected parts of a product experience.",
      ],
      [
        "build",
        "Figma explorations",
        "These frames are intended as editable portfolio content. Add Figma exports, prototype links or embedded frames here.",
      ],
      ["outcome", "What changed", "[ADD OUTCOME OR LEARNING]"],
      [
        "learning",
        "Next steps",
        "Keep the archive evolving with new experiments, shipped work and lessons from practice.",
      ],
    ],
  },
};

export const workflowSections = {
  workflow: [
    [
      "workflow-analysis",
      "Workflow analysis",
      [
        "Mapped contracts, resources, ClockIt and invoicing as connected enterprise workflows.",
        "Identified manual processes, multiple systems and traceability gaps.",
        "[ADD WORKFLOW ANALYSIS DETAILS]",
      ],
    ],
    [
      "product-strategy",
      "Product strategy",
      [
        "Improve contract creation and validation.",
        "Connect resource management with invoicing.",
        "Reduce process friction for Operations and Delivery teams.",
      ],
    ],
    [
      "future-workflow",
      "Future-state workflow",
      [
        "Centralized contracts → validated workflows → connected invoice flow.",
        "Design the future-state journey around contract-to-invoice traceability.",
        "[ADD FUTURE-STATE WORKFLOW DETAILS]",
      ],
    ],
    [
      "automation-delivery",
      "Automation & delivery",
      [
        "Owned requirements and prioritized the product backlog.",
        "Planned UAT and coordinated delivery with stakeholders.",
        "Worked on automation to reduce manual billing effort.",
      ],
    ],
    [
      "workflow-outcome",
      "Outcome",
      [
        "[ADD OUTCOME]",
        "[ADD METRICS]",
        "Do not claim quantitative impact until validated.",
      ],
    ],
    [
      "workflow-lessons",
      "Lessons learned",
      [
        "Enterprise UX improves when the business workflow is understood before the interface.",
        "Product ownership requires connecting user needs, business priorities and delivery.",
      ],
    ],
  ],
  roadmap: [
    [
      "workflow-analysis",
      "Workflow analysis",
      [
        "Reviewed requirements, user feedback and feature pain points across the learning platform.",
        "Connected product needs to implementation and release planning.",
        "[ADD WORKFLOW ANALYSIS DETAILS]",
      ],
    ],
    [
      "product-strategy",
      "Product strategy",
      [
        "Used user feedback to inform roadmap decisions.",
        "Prioritized feature development around key user pain points.",
        "Balanced product experience improvements with implementation needs.",
      ],
    ],
    [
      "future-workflow",
      "Future-state workflow",
      [
        "User need → feedback → requirements → prioritization → design → development → testing → release.",
        "Create a clearer path from feedback to shipped learning features.",
        "[ADD FUTURE-STATE WORKFLOW DETAILS]",
      ],
    ],
    [
      "automation-delivery",
      "Automation & delivery",
      [
        "Participated in requirements gathering and feature implementation.",
        "Worked through development and optimization of the LMS.",
        "Used delivery feedback to guide iteration.",
      ],
    ],
    [
      "workflow-outcome",
      "Outcome",
      [
        "[ADD OUTCOME]",
        "[ADD METRICS]",
        "Do not claim quantitative impact until validated.",
      ],
    ],
    [
      "workflow-lessons",
      "Lessons learned",
      [
        "Product decisions become stronger when feedback is translated into a visible roadmap.",
        "Design, management and development need to stay connected throughout delivery.",
      ],
    ],
  ],
  "design-system": [
    [
      "workflow-analysis",
      "Workflow analysis",
      [
        "Reviewed enterprise interface needs across products.",
        "Used client feedback and usability testing to identify improvement areas.",
        "[ADD WORKFLOW ANALYSIS DETAILS]",
      ],
    ],
    [
      "product-strategy",
      "Product strategy",
      [
        "Create consistent and scalable interfaces.",
        "Support product teams with reusable design foundations.",
        "Align requirements, client expectations and usability.",
      ],
    ],
    [
      "future-workflow",
      "Future-state workflow",
      [
        "Atoms → molecules → organisms → templates → pages.",
        "Use the system to make new product experiences more cohesive.",
        "[ADD FUTURE-STATE WORKFLOW DETAILS]",
      ],
    ],
    [
      "automation-delivery",
      "Automation & delivery",
      [
        "Partnered with Product Managers to gather requirements.",
        "Iterated with client feedback and usability testing.",
        "Created atomic design foundations for scalable delivery.",
      ],
    ],
    [
      "workflow-outcome",
      "Outcome",
      [
        "[ADD OUTCOME]",
        "[ADD METRICS]",
        "Do not claim quantitative impact until validated.",
      ],
    ],
    [
      "workflow-lessons",
      "Lessons learned",
      [
        "A design system needs clear relationships between small parts and complete product experiences.",
        "Consistency is most useful when it still allows the product to evolve.",
      ],
    ],
  ],
  dashboard: [
    [
      "workflow-analysis",
      "Workflow analysis",
      [
        "Examined productivity metrics, user progress, task completion and time tracking.",
        "Translated complex performance data into dashboard questions users can act on.",
        "[ADD WORKFLOW ANALYSIS DETAILS]",
      ],
    ],
    [
      "product-strategy",
      "Product strategy",
      [
        "Move from raw productivity data to information, insight and action.",
        "Make performance visibility useful for monitoring and task management.",
        "Prioritize metrics based on the decisions users need to make.",
      ],
    ],
    [
      "future-workflow",
      "Future-state workflow",
      [
        "Raw productivity data → visualization → information → insight → action.",
        "Connect KPI cards, progress indicators and performance analytics into one experience.",
        "[ADD FUTURE-STATE WORKFLOW DETAILS]",
      ],
    ],
    [
      "automation-delivery",
      "Automation & delivery",
      [
        "Designed dashboard interfaces and productivity visualizations.",
        "Streamlined task management and time-tracking workflows.",
        "Used interaction design to make metrics easier to explore.",
      ],
    ],
    [
      "workflow-outcome",
      "Outcome",
      [
        "[ADD OUTCOME]",
        "[ADD METRICS]",
        "Do not claim quantitative impact until validated.",
      ],
    ],
    [
      "workflow-lessons",
      "Lessons learned",
      [
        "A metric needs context before it becomes useful.",
        "Good data visualization helps users decide what to do next.",
      ],
    ],
  ],
  mobile: [
    [
      "workflow-analysis",
      "Workflow analysis",
      [
        "Mapped the end-to-end 360-video recording journey.",
        "Identified opportunities to make complex functionality easier to use.",
        "[ADD WORKFLOW ANALYSIS DETAILS]",
      ],
    ],
    [
      "product-strategy",
      "Product strategy",
      [
        "Prioritize intuitive mobile workflows.",
        "Validate the user journey before implementation.",
        "Keep design intent aligned with client requirements.",
      ],
    ],
    [
      "future-workflow",
      "Future-state workflow",
      [
        "User flow → interactive prototype → validation → responsive implementation.",
        "Connect capture, recording and review into a clearer mobile experience.",
        "[ADD FUTURE-STATE WORKFLOW DETAILS]",
      ],
    ],
    [
      "automation-delivery",
      "Automation & delivery",
      [
        "Implemented responsive UI using JavaScript and CSS.",
        "Customized Material UI components to match design specifications.",
        "Collaborated directly with clients throughout refinement.",
      ],
    ],
    [
      "workflow-outcome",
      "Outcome",
      [
        "[ADD OUTCOME]",
        "[ADD METRICS]",
        "Do not claim quantitative impact until validated.",
      ],
    ],
    [
      "workflow-lessons",
      "Lessons learned",
      [
        "Prototyping makes complex mobile interactions easier to validate early.",
        "Design-to-code quality improves when requirements and interaction details are aligned.",
      ],
    ],
  ],
  audit: [
    [
      "workflow-analysis",
      "Workflow analysis",
      [
        "Reviewed the existing native iOS and Android experience.",
        "Considered how product, development, HR and support stakeholders depend on shared design decisions.",
        "Identified opportunities to improve structure, consistency and implementation quality.",
      ],
    ],
    [
      "product-strategy",
      "Product strategy",
      [
        "Align the redesign with Material Design 3 for Android.",
        "Align the redesign with Human Interface Guidelines for iOS.",
        "Keep employee needs and cross-functional delivery at the center of prioritization.",
      ],
    ],
    [
      "future-workflow",
      "Future-state workflow",
      [
        "Employee need → clear task flow → platform-aligned interface → feedback → iteration.",
        "Connect stakeholder feedback to a shared and reusable design direction.",
      ],
    ],
    [
      "automation-delivery",
      "Automation & delivery",
      [
        "Create reusable interface patterns for product and development teams.",
        "Share decisions across product, development, HR and support stakeholders.",
        "Use review and refinement cycles to improve implementation confidence.",
      ],
    ],
    [
      "workflow-outcome",
      "Outcome",
      [
        "Improved alignment with approved Android and iOS design guidance.",
        "Created a clearer cross-platform foundation for HR service experiences.",
        "Established a more consistent basis for future redesign and delivery.",
      ],
    ],
    [
      "workflow-lessons",
      "Lessons learned",
      [
        "Platform guidance helps legacy interfaces evolve without losing usability.",
        "Cross-functional collaboration improves consistency from design through implementation.",
      ],
    ],
  ],
};

export const timeline = [
  ["DESIGN", "Learning to see the details."],
  ["FRONTEND", "Making ideas tangible."],
  ["FULL-STACK", "Understanding the whole machine."],
  ["PRODUCT", "Thinking beyond the screen."],
  ["PROJECTS", "Getting things over the line."],
  ["DATA", "Making the invisible useful."],
];

export const principles = [
  [
    "01",
    "Understand",
    "Start with the user, the context and the real problem.",
  ],
  ["02", "Simplify", "Make the complex feel clear, calm and considered."],
  ["03", "Build", "Turn good thinking into something people can touch."],
  ["04", "Measure", "Use feedback and data to see what is working."],
  ["05", "Improve", "Keep asking better questions after launch."],
];

export const pipeline = [
  ["SOURCE", "raw inputs"],
  ["INGEST", "bring it in"],
  ["TRANSFORM", "make it useful"],
  ["STORE", "keep it safe"],
  ["ANALYZE", "ask better"],
  ["INSIGHT", "see clearly"],
];
