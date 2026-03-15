import type { Project } from "../types/project";

export const uxProjects: Project[] = [
  {
    id: "secondhand-sync",
    type: "ux",
    hero: {
      src: "/images/secondhand-sync/cover.jpg",
      alt: "Secondhand Sync cover",
    },
    title: "Secondhand Sync",
    subtitle:
      "Mobile wayfinding and product discovery for secondhand retail · HCI 440 · DePaul University · Winter 2026",
    year: 2026,
    tags: [
      "Usability Testing",
      "User Interviews",
      "Figma",
      "Prototyping",
      "UX Research",
      "Persona Development",
      "User-Centered Design",
      "Think-Aloud Protocol",
      "Mobile Design",
      "Research Synthesis",
    ],
    thumbnail: {
      src: "/images/secondhand-sync/thumbnail.jpg",
      alt: "Secondhand Sync cover",
    },
    summary:
      "A 10-week User-Centered Design project designing a mobile app to help secondhand shoppers navigate stores, discover inventory, and search with confidence.",
    sections: [
      {
        title: "Problem & Context",
        content:
          "Thrift stores are unpredictable by nature: inventory changes daily, organizatio is inconsistent, and there's no reliable way to know if you've actually finished searching. Two types of shoppers feel this most: goal-directed hunters who need to search efficiently, and open-ended browsers who leave unsure if they missed something good.",
      },
      {
        title: "My Role",
        content: `- Conducted user interviews during discovery
- Created concept prototype sketches
- Synthesized requirements for product
- Created mid-fidelity prototypes for store and product search
- Facilitated observed user tests
- Translated final prototypes into a high fidelity prototype`,
      },
      {
        title: "Research Methods",
        content:
          "**12 semi-structured interviews** from shoppers across thrift, vintage, and specialty secondhand stores, chosen because we needed to understand the shopping experience and not just what people buy.\n\n**Think-aloud usability testing (n=5)** on a Figma prototype. Task completion rates alone don't tell you where people hesitate or why.",
      },
      {
        title: "Key Insights",
        content:
          "1. **Search completeness anxiety is real.** 67% of participants described looping the same racks without confidence they'd seen everything\n2. **Shoppers lower expectations before entering.** 58% relied on serendipity because no reliable pre-visit inventory signal exists.\n3. **Price opacity kills purchase confidence.** 42% pulled up eBay or Depop mid-browse just to validate whether a price was actually a deal.\n4. **Multiple search bars broke trust.** The single biggest usability finding: users couldn't tell if they did the same thing or different things.\n5. **Filtering is a baseline expectation.** Users looked for it immediately. Its absense read as an oversight, not a design choice.",
      },
      {
        title: "Design Decisions",
        content: `- **Section Checklist + Store Map** - lets users mark sections as searched and see a progress indicator, directly resolving search completeness anxiety
- **Interesting Finds feed** - surfaces curated inventory before a visit, replacing defensive low expectations with an informed decion
- **Removed homepage search bar** - eliminated the amb`,
      },
      {
        title: "Outcomes",
        content:
          "100% task completion across all five participants and four scenarios. But completion rates masked real friction: the think-aloud protocol surfaced hesitation and confusion that a pass/fail metric would have missed entirely.\n\nFour targeted redesigns shipped in response, each directly traceable to observed user behavior: consolidated search architecture, filtering controls, enriched item and store preview cards, and an onboarding progress indicator with a skip option.",
      },
      {
        title: "Reflection & Next Steps",
        content: `The biggest takeaway: task completion and actual usability are not the same thing. Every participant finished every task. The prototype still had five real problems.

Given more time I'd focus on:
- Reframing the in-store navigation entry point - the mental model hasn't fully landed
- Give thought to the inventory problem: How do stores update their listings?`,
      },
    ],
    links: [
      {
        label: "Figma Prototype",
        url: "https://www.figma.com/proto/smFmROxAX0PfCuXDxUAPAP/Reprise?node-id=10-1964&viewport=334%2C190%2C0.24&t=JkmnJlofnvKXU63j-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=10%3A1964&page-id=0%3A1",
      },
    ],
  },
  {
    id: "personal-design-theory",
    type: "ux",
    hero: {
      src: "/images/personal-design-theory/cover.jpg",
      alt: "How I See the World — Personal Design Theory cover",
    },
    title: "How I See the World",
    subtitle:
      "Personal Design Theory · HCI 440 · DePaul University · Winter 2026",
    year: 2026,
    tags: [
      "Design Theory",
      "Norman",
      "Nielsen",
      "bell hooks",
      "Hendren",
      "Dalla Costa",
      "Emotional Design",
      "Usability",
      "Accessibility",
      "Sustainability",
    ],
    thumbnail: {
      src: "/images/personal-design-theory/thumbnail.jpg",
      alt: "How I See the World — Personal Design Theory cover",
    },
    summary:
      "A personal design philosophy built around seven principles — Candor, Resonance, Character, Understanding, Curiosity, Patina, and Constraint — drawn from everyday interactions and grounded in thinkers ranging from Don Norman to bell hooks to Wanda Dalla Costa. Published as a 16-page magazine.",
    sections: [
      {
        title: "Problem & Context",
        content:
          "Many design frameworks treat principles as technical checklists. This project asked a different question: what does good design mean to someone whose instincts were shaped by years of customer-facing work, a non-traditional path into engineering, and a growing interest in how technology shapes human experience? The assignment required moving from observation to abstraction, using everyday artifacts to extract a personal, coherent design philosophy.",
      },
      {
        title: "My Role",
        content:
          "Individual project. All observation, analysis, principle development, case study writing, and visual design were my own work.",
      },
      {
        title: "Research Methods",
        content:
          "Interaction inventory across eight physical and digital artifacts used regularly, analyzed through a design lens. Principles were inductively developed from observed patterns and grounded in established theory including Norman's emotional design framework, Nielsen's usability heuristics, Hendren's disability studies lens, hooks' pedagogy of possibility, and Dalla Costa's relational worldview.",
      },
      {
        title: "Key Insights",
        content:
          "Candor — design must be honest about what is happening and why. Without it, users fill the void with their own mental models and frustration follows.\nResonance — emotional connection is achieved when visceral, behavioral, and reflective layers of experience align simultaneously.\nCharacter — aesthetic choices communicate values, not just appearances.\nUnderstanding — design must account for variance in human ability; accessibility is not optional or additive.\nCuriosity — the best designs reward exploration. The worst punish it.\nPatina — longevity gives meaning. Designing for disposal is a values statement.\nConstraint — creative solutions emerge not in spite of limitations but because of them.",
      },
      {
        title: "Design Decisions",
        content:
          "The principles were presented as a 16-page magazine rather than a standard academic document — a deliberate choice to let the form embody the argument. A design theory about character, resonance, and patina should itself have character, resonance, and the feeling of something worth keeping.",
      },
      {
        title: "Outcomes",
        content:
          "Full marks. The Fractal Terra PC case served as the beloved design case study, illustrating constraint, patina, character, and resonance. The Haier washer/dryer combo served as the problematic design case study, demonstrating violations of candor, curiosity, and patina.",
      },
      {
        title: "Reflection & Next Steps",
        content:
          "This framework continues to evolve as a lens I apply to my engineering and HCI work. The most generative tension in the framework is between Curiosity and Candor — the best designs are honest enough to be trusted and open enough to reward deeper engagement. I'd like to eventually formalize this as a publishable framework with application to software interface design specifically.",
      },
    ],
    links: [
      {
        label: "Read the Full Paper",
        url: "https://drive.google.com/file/d/16IGSup5CVBfOY_K7w3vPR82xK7aC7YJX/view?usp=sharing",
      },
    ],
  },
];

export const engineeringProjects: Project[] = [
  // {
  //   id: "pie-onboarding",
  //   type: "engineering",
  //   title: "Pie Onboarding Rebuild",
  //   subtitle: "Senior Software Engineer · Pie · 2026",
  //   year: 2026,
  //   tags: ["React Native", "TypeScript", "Mobile", "Product", "Mixpanel", "UX"],
  //   thumbnail: {
  //     src: "/images/pie-onboarding/cover.png",
  //     alt: "Pie mobile app onboarding flow",
  //   },
  //   summary:
  //     "Rebuilt the Pie mobile onboarding flow from 4 steps to 13 to drive richer profile completion and improve user-to-user interaction quality. Despite the significant increase in steps, Mixpanel event tracking showed no meaningful drop-off — users were completing the full flow.",
  //   sections: [
  //     {
  //       title: "Problem",
  //       content:
  //         "New users were arriving on the platform with sparse profiles — no photo, minimal interests, little context for other users to connect with them. This created a cold-start problem: even users who wanted to engage had nothing to go on. The original 4-step onboarding wasn't capturing enough signal to make the product work.",
  //     },
  //     {
  //       title: "Approach",
  //       content:
  //         "Expanded onboarding from 4 steps to 13, progressively collecting profile data — photos, interests, social context, and preferences — in a way that felt conversational rather than form-like. Each step was designed to feel low-friction while collectively building a profile dense enough to drive real recommendations and interactions.",
  //     },
  //     {
  //       title: "Outcome",
  //       content:
  //         "No significant drop-off at any step according to Mixpanel funnel analysis. Users were completing the full 13-step flow at rates comparable to the original 4-step flow, with substantially richer profiles as the result. The rebuild directly improved the quality of user-to-user interactions on the platform.",
  //     },
  //   ],
  // },
  {
    id: "us-state-converter",
    type: "engineering",
    title: "us-state-converter",
    subtitle: "Open Source · npm package · 2020–present",
    year: 2023,
    tags: ["JavaScript", "npm", "Open Source", "Node.js"],
    thumbnail: {
      src: "/images/us-state-converter/cover.png",
      alt: "us-state-converter npm package",
    },
    summary:
      "A utility package for converting US state names to abbreviations and back, with support for USPS, ISO, and USCG formats plus demonyms. Built to scratch a recurring itch across multiple projects. Currently averaging over 21,000 weekly downloads.",
    sections: [
      {
        title: "Why I Built It",
        content:
          "I kept writing the same state abbreviation conversion utility across different projects. Rather than copy-pasting, I packaged it properly, published it to npm, and used it as an opportunity to learn the full open source workflow: versioning, documentation, package distribution, and maintenance.",
      },
      {
        title: "What It Does",
        content:
          "Converts between full state names and USPS abbreviations in both directions. Returns full state objects including ISO and USCG codes and demonyms. Supports filtering to just the 50 states (excluding territories and DC). Designed to be dead simple: one import, intuitive method names, no dependencies.",
      },
      {
        title: "Traction",
        content:
          "21,000+ weekly downloads as of 2026. The package has been running for five years with minimal maintenance, which is the point — it solves a small problem well and stays out of the way.",
      },
    ],
    links: [
      { label: "npm", url: "https://www.npmjs.com/package/us-state-converter" },
      {
        label: "GitHub",
        url: "https://github.com/keveightysev/us-state-converter",
      },
    ],
  },
  {
    id: "internet-graffiti-wall",
    type: "engineering",
    title: "Internet Graffiti Wall",
    subtitle: "Personal Project · 2019–present",
    year: 2019,
    tags: ["React", "Canvas API", "JavaScript", "Personal"],
    thumbnail: {
      src: "/images/graffiti-wall/cover.png",
      alt: "Internet Graffiti Wall — canvas spray paint app",
    },
    summary:
      "A browser-based spray paint simulator built on the Canvas API. My first fully self-directed project — no tutorials, no instruction. You open it, you paint a wall.",
    sections: [
      {
        title: "Why It Exists",
        content:
          "I wanted to build something purely for fun and teach myself the Canvas API without following a tutorial. The graffiti wall concept was simple enough to be achievable but open-ended enough to stay interesting. It's still one of my favorite things I've built.",
      },
      {
        title: "How It Works",
        content:
          "Uses the Canvas API to simulate spray paint: a randomized particle spread that responds to mouse speed and pressure. The faster you move, the more diffuse the spray. Hold still and the paint builds up. No libraries, no frameworks beyond React for the shell.",
      },
      {
        title: "Status",
        content:
          "Actively maintained and being expanded. More features in progress.",
      },
    ],
    links: [
      { label: "Live Site", url: "https://graffiti-wall.netlify.app/" },
      { label: "GitHub", url: "https://github.com/keveightysev/graffiti" },
    ],
  },
  {
    id: "recaller",
    type: "engineering",
    title: "ReCaller",
    subtitle: "Lambda School Labs · 2019",
    year: 2019,
    tags: ["React", "Node.js", "Firebase", "Twilio", "Stripe", "Deepgram"],
    thumbnail: {
      src: "/images/recaller/cover.png",
      alt: "ReCaller — scheduled phone call app",
    },
    summary:
      "A scheduled phone call app that recorded calls, transcribed them via Deepgram, and stored recordings for later access. Built in 6 weeks with a team of four during Lambda School Labs, integrating Twilio for calls, Stripe for payments, and Firebase for storage.",
    sections: [
      {
        title: "The Build",
        content:
          "Six weeks, four developers, three external APIs, and a product spec we had to interpret ourselves. Twilio handled call scheduling and recording, Deepgram transcribed the audio, Stripe handled subscription payments, and Firebase stored recordings and transcriptions. The hardest part was orchestrating the async pipeline between call completion, transcription, and delivery.",
      },
      {
        title: "My Role",
        content:
          "Frontend architecture and API integration on the React side. Also handled the Stripe payment flow and worked closely with the backend developer on the Twilio webhook pipeline.",
      },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/labs12-mom-caller/Front-End",
      },
    ],
  },
];

export const researchProjects: Project[] = [
  {
    id: "delegating-authenticity",
    type: "research",
    title: "Delegating Authenticity",
    subtitle:
      "Critical Reading Memo · HCI 450 · DePaul University · Winter 2026",
    year: 2026,
    tags: [
      "Goffman",
      "Swidler",
      "Geertz",
      "Impression Management",
      "Cultural Toolkit",
      "Thick Description",
      "AI Ethics",
      "SMS AI",
      "Technology-as-Culture",
    ],
    thumbnail: {
      src: "/images/delegating-authenticity/cover.png",
      alt: "Delegating Authenticity — SMS-based AI analysis",
    },
    summary:
      "An analysis of Poke's promotional materials through Goffman, Swidler, and Geertz, arguing that SMS-based AI assistants embed two assumptions — that emotional labor is outsourceable and social coordination is a technical problem — creating a feedback loop that gradually atrophies users' cultural competencies.",
    links: [
      {
        label: "Read the Full Paper",
        url: "https://drive.google.com/file/d/1djzuppkmlW3Of8E37JE-JxjJfpD057SR/view?usp=sharing",
      },
    ],
  },
  {
    id: "quest-log-lineage",
    type: "research",
    title: "From To-Do Lists to Dragons",
    subtitle: "Lineage Analysis · HCI 450 · DePaul University · Winter 2026",
    year: 2026,
    tags: [
      "Distributed Cognition",
      "Engelbart",
      "Hollan & Hutchins",
      "Zhang & Norman",
      "Costanza-Chock",
      "Game Design",
      "Productivity UI",
      "Design Justice",
      "Cognitive Artifacts",
    ],
    thumbnail: {
      src: "/images/quest-log-lineage/cover.png",
      alt: "Quest log lineage analysis — Dragon Age Inquisition quest log",
    },
    summary:
      "A lineage analysis tracing the quest log in role-playing games through two converging traditions: gameplay conventions originating in tabletop RPGs, and representational design patterns rooted in Engelbart's augmentation framework and productivity software. Argues that quest logs colonize play with workplace logic, privileging certain modes of engagement while marginalizing others.",
    links: [
      {
        label: "Read the Full Paper",
        url: "https://drive.google.com/file/d/19xNEAFExI2JIIFQQ9oSNfPvL-FV_313y/view?usp=sharing",
      },
    ],
  },
  {
    id: "pie-checkin-interpretive",
    type: "research",
    title: "Frontstage Access, Backstage Labor",
    subtitle:
      "Interpretive Analysis · HCI 450 · DePaul University · Winter 2026",
    year: 2026,
    tags: [
      "Goffman",
      "Contextual Design",
      "Beyer & Holtzblatt",
      "Impression Management",
      "Frontstage/Backstage",
      "Pie",
      "Mobile UX",
    ],
    thumbnail: {
      src: "/images/pie-checkin/cover.png",
      alt: "QR code check-in interaction at a Pie event",
    },
    summary:
      "An interpretive analysis of QR code check-in at a Pie event, using Goffman's presentation of self to argue that a successful scan does more than grant access — it publicly confirms legitimacy and belonging. Examines the invisible backstage labor users perform to preserve frontstage order when the system breaks down.",
    links: [
      {
        label: "Read the Full Paper",
        url: "https://drive.google.com/file/d/1KHoOVarqawjlw8OpXUSmrs-YvYfV7_X_/view?usp=sharing",
      },
    ],
  },
];
