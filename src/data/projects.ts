import type { Project } from "../types/project";

export const uxProjects: Project[] = [
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
        title: "Your Role",
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

export const engineeringProjects: Project[] = [];

export const researchProjects: Project[] = [];
