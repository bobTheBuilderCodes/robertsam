export const disciplines = {
  'UX Designer': { eyebrow: 'STRUCTURE / STORY / SYSTEMS', text: 'I turn fuzzy problems into clear, useful product experiences.', color: 'orange' },
  'Full-stack Dev': { eyebrow: 'INTERFACE / LOGIC / SCALE', text: 'I build the connective tissue that makes digital products work.', color: 'blue' },
  'Project Manager': { eyebrow: 'PEOPLE / PLANNING / DELIVERY', text: 'I move good ideas from conversation to a thing people can use.', color: 'green' },
  'Data Engineer': { eyebrow: 'RAW / RELIABLE / USEFUL', text: 'I am learning how raw information becomes a source of better decisions.', color: 'purple' }
};

export const projects = [
  { number: '01', category: 'UX AUDIT / MOBILE', name: 'EApp', desc: 'An ongoing UX audit and redesign exploration for native iOS and Android.', type: 'coral', tags: ['UX audit', 'iOS', 'Android'], kind: 'audit', status: 'Currently in progress' },
  { number: '02', category: 'PRODUCT DESIGN / PRODUCT OWNERSHIP', name: 'Contract & Invoice Platform', desc: 'An enterprise workflow system for contracts, resources and invoicing.', type: 'ochre', tags: ['Enterprise', 'Workflow automation', 'Product ownership'], kind: 'workflow', status: 'Completed' },
  { number: '03', category: 'PRODUCT DESIGN / ENTERPRISE UX', name: 'ICON', desc: 'An ERP platform for a German institute, designed around scalable enterprise systems.', type: 'lime', tags: ['Enterprise', 'Atomic design', 'Design systems'], kind: 'design-system', status: 'Completed' },
  { number: '04', category: 'PRODUCT DESIGN / MOBILE UX', name: 'CaptiVR', desc: 'A 360-video recording solution with intuitive mobile workflows.', type: 'lavender', tags: ['Mobile UX', 'Prototyping', 'Development'], kind: 'mobile', status: 'Completed' },
  { number: '05', category: 'PRODUCT DESIGN / PRODUCT MANAGEMENT', name: 'ALS', desc: 'An AmaliTech learning platform shaped by requirements, feedback and delivery.', type: 'cyan', tags: ['LMS', 'Product management', 'Development'], kind: 'roadmap', status: 'Completed' },
  { number: '06', category: 'PRODUCT DESIGN / DATA VISUALIZATION', name: 'PMMD', desc: 'A productivity monitoring tool that turns performance data into clearer action.', type: 'purple', tags: ['Dashboard', 'Data visualization', 'Analytics'], kind: 'dashboard', status: 'Completed' }
];

export const caseStudyContent = {
  workflow: {
    title: 'From billing friction to connected workflows.',
    summary: 'An end-to-end enterprise product story across contracts, invoices, resource management and ClockIt.',
    contribution: 'Led end-to-end product design, transitioned into Product Owner responsibilities, owned requirements, prioritized the backlog, planned UAT and coordinated delivery.',
    focus: ['Business processes', 'Stakeholder alignment', 'Automation', 'Product ownership'],
    sections: [['problem', 'The problem', 'The existing process involved manual work, multiple systems, repetitive tasks and limited contract-to-invoice traceability.'], ['research', 'Workflow analysis', '[ADD RESEARCH DETAILS]'], ['strategy', 'Product strategy', 'The opportunity was to connect contract creation, validation, resource management and invoicing into a clearer workflow.'], ['ux', 'Future-state workflow', '[ADD FUTURE-STATE WORKFLOW DETAILS]'], ['build', 'Automation & delivery', 'Worked across requirements, backlog prioritization, UAT planning and stakeholder coordination.'], ['outcome', 'Outcome', '[ADD OUTCOME] / [ADD METRICS]'], ['snapshots', 'Design snapshots', 'UI designs and Figma explorations for this project.'], ['learning', 'Lessons learned', 'Good enterprise UX requires understanding the business process behind every screen.']]
  },
  roadmap: {
    title: 'A learning platform shaped by feedback.',
    summary: 'A detailed product design, management and development story from requirements through release.',
    contribution: 'Led development and optimization, participated in requirements gathering, prioritized features from user feedback and helped shape the product roadmap.',
    focus: ['User needs', 'Requirements', 'Prioritization', 'Development'],
    sections: [['problem', 'The problem', '[ADD PRODUCT PROBLEM DETAILS]'], ['research', 'Research & feedback', 'User feedback informed roadmap decisions and helped identify key pain points for new features.'], ['strategy', 'Product roadmap', '[ADD ROADMAP DETAILS]'], ['ux', 'Feature experience', 'Translated requirements and user needs into flows, interfaces and prioritized features.'], ['build', 'Implementation', 'Worked through feature implementation and optimization alongside the product and engineering process.'], ['outcome', 'Product outcomes', '[ADD OUTCOME] / [ADD METRICS]'], ['snapshots', 'Design snapshots', 'UI designs and Figma explorations for this project.'], ['learning', 'Lessons learned', 'The strongest product decisions connect user feedback to a clear delivery priority.']]
  },
  'design-system': {
    title: 'Enterprise UX, built to scale.',
    summary: 'An ERP platform for a German institute, with a focus on requirements, atomic design and iterative improvement.',
    contribution: 'Designed atomic design systems, partnered with Product Managers, gathered requirements and improved the product through client feedback and usability testing.',
    focus: ['Enterprise UX', 'Requirements gathering', 'Atomic design', 'Usability testing'],
    sections: [['problem', 'The enterprise context', 'ICON required consistent, scalable interfaces across products while responding to evolving client needs.'], ['research', 'Research & requirements', 'Partnered with Product Managers and participated in structured client engagement sessions to understand requirements.'], ['strategy', 'Research findings', '[ADD RESEARCH FINDINGS]'], ['ux', 'UX challenges', '[ADD UX CHALLENGES]'], ['ui', 'Atomic design system', 'Atoms → Molecules → Organisms → Templates → Pages'], ['build', 'Iterations', 'Worked iteratively with client feedback and usability testing to improve the product.'], ['outcome', 'Impact', '[ADD OUTCOME] / [ADD METRICS]'], ['snapshots', 'Design snapshots', 'UI designs and Figma explorations for this project.'], ['learning', 'Lessons learned', 'A design system becomes valuable when it supports both consistency and change.']]
  },
  dashboard: {
    title: 'Turning productivity data into action.',
    summary: 'A data-driven monitoring and management tool for productivity metrics, progress and task visibility.',
    contribution: 'Designed dashboards, productivity visualizations, progress monitoring, task management, time-tracking workflows and performance analytics experiences.',
    focus: ['Metrics', 'Data visualization', 'Task management', 'Performance analytics'],
    sections: [['problem', 'The productivity problem', '[ADD PRODUCTIVITY PROBLEM DETAILS]'], ['research', 'Users & stakeholders', '[ADD USER AND STAKEHOLDER DETAILS]'], ['strategy', 'Dashboard strategy', 'Raw productivity data → Data visualization → Information → Insight → Action'], ['ux', 'Task & time workflows', 'Streamlined task management and time-tracking workflows to improve visibility.'], ['ui', 'Visualization decisions', '[ADD VISUALIZATION RATIONALE]'], ['build', 'Interaction design', 'Designed KPI cards, progress indicators, charts and performance views around the questions users need to answer.'], ['outcome', 'Outcome', '[ADD OUTCOME] / [ADD METRICS]'], ['snapshots', 'Design snapshots', 'UI designs and Figma explorations for this project.'], ['learning', 'Lessons learned', 'Data becomes useful when the interface makes the next decision easier.']]
  },
  mobile: {
    title: 'Making 360-video feel intuitive.',
    summary: 'A mobile UX and frontend story across user flows, prototypes, Material UI and responsive implementation.',
    contribution: 'Designed mobile interfaces, created user flows and prototypes, collaborated with clients, validated journeys and implemented responsive UI with JavaScript, CSS and customized Material UI components.',
    focus: ['Mobile UX', 'User flows', 'Design-to-code', 'Material UI'],
    sections: [['problem', 'The challenge', 'The experience needed to make complex 360-video functionality easier to use.'], ['research', 'Understanding the user', '[ADD RESEARCH DETAILS]'], ['strategy', 'User flows', 'Mapped and refined end-to-end journeys before moving into interactive prototypes.'], ['ux', 'Prototype & validation', 'Validated and optimized user journeys through interactive prototypes and client collaboration.'], ['ui', 'Visual design', 'Created intuitive mobile interfaces and customized Material UI components to match the design direction.'], ['build', 'Responsive implementation', 'Implemented responsive UI using JavaScript and CSS.'], ['outcome', 'Outcome', '[ADD OUTCOME] / [ADD METRICS]'], ['snapshots', 'Design snapshots', 'UI designs and Figma explorations for this project.'], ['learning', 'Lessons learned', 'Design-to-code works best when interaction intent is clear before implementation begins.']]
  },
  audit: {
    title: 'A mobile experience, currently in progress.',
    summary: 'A UX audit and redesign exploration for a native iOS and Android application developed for a German company.',
    contribution: 'Currently working on the UX audit, existing experience analysis, usability evaluation, friction points, redesign exploration and mobile interaction improvements.',
    focus: ['UX audit', 'iOS', 'Android', 'Redesign exploration'],
    sections: [['problem', 'Current experience', '[ADD CURRENT EXPERIENCE DETAILS]'], ['research', 'UX audit', 'Analyzing the existing experience and evaluating usability issues across the native mobile application.'], ['strategy', 'Design opportunities', 'Identifying friction points and opportunities to improve mobile interactions across iOS and Android.'], ['ux', 'Proposed improvements', '[ADD PROPOSED IMPROVEMENTS]'], ['ui', 'Before vs after', '[ADD BEFORE / AFTER DETAILS]'], ['build', 'Current progress', 'This case study is ongoing and should not be presented as a completed project.'], ['status', 'Current status', 'CURRENTLY IN PROGRESS'], ['snapshots', 'Design snapshots', 'UI designs and Figma explorations for this project.'], ['learning', 'Next steps', '[ADD NEXT STEPS]']]
  },
  snapshots: {
    title: 'A visual archive of ideas in motion.',
    summary: 'Selected interface explorations and design-system studies created in Figma.',
    contribution: 'A curated collection of visual explorations. Replace the sample frames with exported Figma designs as the archive grows.',
    focus: ['Figma', 'UI design', 'Design systems', 'Interaction studies'],
    sections: [['overview', 'About these snapshots', 'A collection of design explorations showing how visual ideas, interaction patterns and systems take shape.'], ['research', 'The question behind the frame', '[ADD CONTEXT FOR EACH FIGMA SNAPSHOT]'], ['strategy', 'Design direction', '[ADD DESIGN RATIONALE]'], ['ux', 'Flows & interactions', '[ADD FLOW OR PROTOTYPE DETAILS]'], ['ui', 'Visual system', 'Typography, color, components and layout studies are explored as connected parts of a product experience.'], ['build', 'Figma explorations', 'These frames are intended as editable portfolio content. Add Figma exports, prototype links or embedded frames here.'], ['outcome', 'What changed', '[ADD OUTCOME OR LEARNING]'], ['learning', 'Next steps', 'Keep the archive evolving with new experiments, shipped work and lessons from practice.']]
  }
};

export const timeline = [
  ['DESIGN', 'Learning to see the details.'], ['FRONTEND', 'Making ideas tangible.'], ['FULL-STACK', 'Understanding the whole machine.'],
  ['PRODUCT', 'Thinking beyond the screen.'], ['PROJECTS', 'Getting things over the line.'], ['DATA', 'Making the invisible useful.']
];

export const principles = [
  ['01', 'Understand', 'Start with the user, the context and the real problem.'], ['02', 'Simplify', 'Make the complex feel clear, calm and considered.'],
  ['03', 'Build', 'Turn good thinking into something people can touch.'], ['04', 'Measure', 'Use feedback and data to see what is working.'], ['05', 'Improve', 'Keep asking better questions after launch.']
];

export const pipeline = [
  ['SOURCE', 'raw inputs'], ['INGEST', 'bring it in'], ['TRANSFORM', 'make it useful'], ['STORE', 'keep it safe'], ['ANALYZE', 'ask better'], ['INSIGHT', 'see clearly']
];
